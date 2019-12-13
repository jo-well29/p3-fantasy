import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import TeamRoster from "../screens/TeamRoster";
import AvailableCoders from "../screens/AvailableCoders";
import SignUp from "../screens/SignUp";
import SignOut from "../screens/SignOut";

const Routes = ({ user, setUser, coder, clearUser }) => (
  <Switch>
     <Route
      exact
      path="/"
      render={props => (user ? <TeamRoster {...props} user={user} coder = {coder}/> : <Home />)}
    />
    <Route exact path="/availablecoders" render= {props => (user ? <AvailableCoders {...props} user={user}/> : <AvailableCoders />)}/>
    <Route
      exact
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} user={user} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
  </Switch>
);

export default Routes;
