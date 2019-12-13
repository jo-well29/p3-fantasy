import React from "react";
import { signInUser } from "../../services/auth";
import "./SignIn.css";
import {NavLink} from 'react-router-dom'
import Header from '../shared/Header'



class SignIn extends React.Component {
  constructor() {
    super();
    this.state = "";
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: ""
    });
  };

  onSignIn = event => {
    event.preventDefault();

    const { history, setUser } = this.props;

    signInUser(this.state)
      .then(res => {
        setUser(res.user);
        history.push('/')
      })
      .catch(error => {
        console.error(error);
        this.setState({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: ""
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button className="btn-signin" type="submit">
          Sign In
        </button>
      );
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="signUp-page" >
      <Header />
        <div className= "navDiv">
       <NavLink className="home" to="/">
              Home
            </NavLink>
      <NavLink className="signUp" to='/sign-up'>Sign Up</NavLink>
      </div>
      <div className="signin-container">
        <div className="signin-form">
          <h3>Sign In</h3>
          <form onSubmit={this.onSignIn}>
            <label>Email</label>
            <input
              className="form-styling"
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              className="form-styling"
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            {this.renderError()}
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default SignIn;
