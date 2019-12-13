import React from "react";
import { NavLink } from "react-router-dom";
import "./TeamRoster.css";
import Axios from "axios";
import Header from "../shared/Header";
import { updateCoder } from "../../services/coders";

class TeamRoster extends React.Component {
  constructor() {
    super();
    this.state = {
      coders: []
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `http://localhost:3000/api/users/${this.props.user.id}/coders`
      );
      let coders = response.data.userRoster[0].Coders;
      if (coders) {
        this.setState({ coders });
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
  renderButton = id => {
    const reset = {
      id: 0
    };
    return (
      <button className= "rosterrenderbtn"
        onClick={e => {
          updateCoder(id, reset).then(() => {
            this.forceUpdate();
            this.props.history.push("/buffer");
            this.props.history.push(`/`);
          });
        }}
      >
        X
      </button>
    );
  };
  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
        return (
          <div className="coderList" key={coder.id}>
            <img src={coder.img} alt="profile picture" />
            <h4>{coder.name}</h4>
            <h5>{coder.expertise}</h5>
            {this.renderButton(coder.id)}
          </div>
        );
      });
    } else {
      return null;
    }
  };
  listCoders = () => {
    const { coders } = this.state;
    return (
      <>
        {!coders.length ? <h3> All coders hired</h3> : null}
        <div className="coder-container">{this.renderCoders()}</div>
      </>
    );
  };
  hasUx = () => {
    let length = this.state.coders.length;
    let ux = false;
    for (let i = 0; i < length; i++) {
      if (
        this.state.coders[i].expertise === "UX/CSS" ||
        this.state.coders[i].expertise === "UX/HTML"
      ) {
       ux = true;
      }
    }
      if (!ux) {
        return <p>Grab a Ux designer</p>;
      }
  };
  hasFe = () => {
    let length = this.state.coders.length;
    let fe = false;
    for (let i = 0; i < length; i++) {
      if (
        this.state.coders[i].expertise === "React" ||
        this.state.coders[i].expertise === "CSS"
      ) {
       fe = true;
      }
    }
    if (!fe) {
      return <p>Grab a front end dev</p>;
    }
  };
  hasBe = () => {
    let length = this.state.coders.length;
    let be = false;
    for (let i = 0; i < length; i++) {
      if (
        this.state.coders[i].expertise === "SQL" ||
        this.state.coders[i].expertise === "Express"
      ) {
       return be = true;
      }
    }
    if (!be) {
      return <p>Grab a back end dev</p>;
    }
  };
  render() {
    if(!this.state.coders){
      console.log(this.state.coders[0].expertise)

    }
    return (
      <div className="teamroster-container">
        <Header />
        <div className="teamroster">
          <h1>TEAM ROSTER</h1>
          <div className="rosterlinks">
            <NavLink className="availablecoderslink" to="/availablecoders">
              Available Coders
            </NavLink>
            <NavLink className="signout" to="/sign-out">
              Sign Out
            </NavLink>
          </div>
        </div>
        <hr></hr>
        <div className="rosterlogo">
          <div className="teamlogo"></div>
          <div className="teamName">
            <p>
              <span>TEAM NAME:</span> {this.props.user.email}
            </p>
            <p>
              <span>TEAM OWNER:</span> {this.props.user.firstName}
            </p>
          </div>
        </div>
        <div className="team-text">
      {this.hasUx()}
      {this.hasFe()}
      {this.hasBe()}

          <h2>Your TEAM</h2>
        </div>
        <hr></hr>
        <div>{this.listCoders()}</div>
      </div>
    );
  }
}

export default TeamRoster;
