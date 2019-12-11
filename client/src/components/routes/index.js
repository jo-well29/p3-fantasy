import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import TeamRoster from "../screens/TeamRoster";
import AvailableCoders from "../screens/AvailableCoders";
import SignUp from "../screens/SignUp";
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = (user, setUser, coder) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/availablecoders" component={AvailableCoders} />
    <Route
      exact
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />
    <AuthenticatedRoute
      exact
      path="/teamroster"
      user={user}
      render={props => <TeamRoster {...props} user={user} coder = {coder}/>}
    />
  </Switch>
);

export default Routes