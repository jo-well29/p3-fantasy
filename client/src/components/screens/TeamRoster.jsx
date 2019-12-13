import React from "react";
import { NavLink } from "react-router-dom";
import "./TeamRoster.css";
import Axios from "axios";
import Header from "../shared/Header";
import { updateCoder, trainCoder } from "../../services/coders";

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
  removeCoder = id => {
    const reset = {
      id: 0
    };
    return (
      <button
        className="remove-coder"
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

  raiseCoder = (id, efficency, salary) => {
    const raise = {
      efficency: parseFloat(efficency) + .05,
      salary: parseInt(salary) + 5000
    }
    return (
    <button
        className="raise-coder"
        onClick={e => {
          trainCoder(id, raise).then(() => {
            this.props.history.push("/buffer");
            this.props.history.push(`/`);
          });
        }}
      >
        Train Team Member
      </button>
    )
  }

  renderCoders = () => {
    if (this.state.coders.length) {
      return this.state.coders.map(coder => {
        return (
          <div className="coderList" key={coder.id}>
            <div className="job-title">
              {coder.expertise === "UX/CSS" || coder.expertise === "UX/HTML" ? (
                <h1>Design</h1>
              ) : coder.expertise === "React" || coder.expertise === "CSS" ? (
                <h1>Front End</h1>
              ) : (
                <h1>Back End</h1>
              )}
            </div>
            <img src={coder.img} alt="profile picture" />
            <h4>{coder.name}</h4>
            <h5>{coder.expertise}</h5>
            {this.raiseCoder(coder.id, coder.efficency, coder.salary)}
            {this.removeCoder(coder.id)}
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
      return <p className="UX">Grab a UX designer!</p>;
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
      return <p className="front">Grab a front end developer!</p>;
    }
  };
  hasBe = () => {
    let length = this.state.coders.length;
    let be = false;
    for (let i = 0; i < length; i++) {
      if (
        this.state.coders[i].expertise === "SQL" ||
        this.state.coders[i].expertise === "Express" ||
        this.state.coders[i].expertise === "Python" ||
        this.state.coders[i].expertise === "Javascript"
      ) {
        return (be = true);
      }
    }
    if (!be) {
      return <p className="back">Grab a back end developer!</p>;
    }
  };

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  totalExpenses = () => {
    let salaries = [];
    if (this.state.coders) {
      this.state.coders.map(coder => {
        salaries.push(coder.salary);
      });
    }
    let expense = 0;
    if (salaries) {
      for (let i = 0; i < salaries.length; i++) {
        expense += parseInt(salaries[i]);
      }
    }

  return <h1> R&D: ${this.numberWithCommas(expense)}</h1>;
  };

  render() {
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
              <span>PRODUCT:</span> {this.props.user.product}
            </p>
            <p>
              <span>PROJECT MANAGER:</span> {this.props.user.name}
            </p>
          </div>
        </div>
        <div className="team-text">
          {this.totalExpenses()}
          {this.hasUx()}
          {this.hasFe()}
          {this.hasBe()}

          <h2 className="yourname">YOUR TEAM:</h2>
        </div>
        <hr></hr>
        <div>{this.listCoders()}</div>
      </div>
    );
  }
}

export default TeamRoster;
