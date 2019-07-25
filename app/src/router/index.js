import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Teams from "../pages/teams/TeamList";
import Team from "../pages/teams/Team";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/teams/:id" component={Team} />
      <Route path="/" component={Teams} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
