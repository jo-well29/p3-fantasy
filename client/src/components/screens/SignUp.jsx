import React from 'react'
import { signUp, signInUser } from '../../services/auth'
import './SignUp.css'
import {NavLink} from 'react-router-dom'
import Header from '../shared/Header'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event =>
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''

        })

    onSignup = event => {
        event.preventDefault()
        const { history, setUser } = this.props

        signUp(this.state).then(() => signInUser(this.state)).then(res => {
            setUser(res.user)

            history.push('/')
        })
            .catch(error => {
                console.error(error)
                this.setState({
                    name: '',
                    product: '',
                    email: '',
                    password: '',
                    isError: true,
                    errorMsg: 'DETAILS INVALID'
                })
            })
    }

    renderError() {
        const toggleForm = this.state.isError ? 'danger' : ''
        if (this.state.isError) {
            return (
                <button type="submit" className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else

            return <button className="signup" type="submit">Sign Up</button>
    }
    render() {
        const { name, product, email, password } = this.state
        return (
            <div className="signupDiv">
            <Header />
                <div className="signup-nav">
                    <NavLink className="home" to="/">
                        Home
            </NavLink>
                    <NavLink className="signIn" to='/sign-in'>Sign In</NavLink>
                </div>
                <div className="signup-container">
                    <div className="signup-form">
                        <h3>Sign Up</h3>
                        <div className="input-form">
                            <form onSubmit={this.onSignup}>
                                <label>Name </label>
                                <input
                                    className="form-styling"
                                    required
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Full Name"
                                    onChange={this.handleChange}
                                />

                                <label>Product Name</label>
                                <input
                                    className="form-styling"
                                    required
                                    type="text"
                                    name="product"
                                    value={product}
                                    placeholder="Product Name"
                                    onChange={this.handleChange}
                                />

                                <label>Email </label>
                                <input
                                    className="form-styling"
                                    required
                                    type="text"
                                    name="email"
                                    value={email}
                                    placeholder="Enter Your Email"
                                    onChange={this.handleChange}
                                />

                                <label>Password</label>
                                <input
                                    className="form-styling"
                                    required
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Enter a Password"
                                    onChange={this.handleChange}
                                />
                                {this.renderError()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp