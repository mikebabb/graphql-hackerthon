import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Teams from "../pages/teams/TeamList";
import Team from "../pages/teams/Team";
import Issues from "../pages/issues/IssueList";
import Issue from "../pages/issues/Issue";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/teams/:id" component={Team} />
      <Route path="/issues/:id" component={Issue} />
      <Route path="/issues/" component={Issues} />
      <Route path="/" component={Teams} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
