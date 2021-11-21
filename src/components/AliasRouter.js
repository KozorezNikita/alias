import { useContext } from "react";
import {
  Switch, Route, Redirect } from "react-router-dom";
import { AliasContext } from "./AliasProvider";
import { aliasRoutes } from "../router/router";

function AliasRouter() {
  const { theme } = useContext(AliasContext);
  return (
    
      <Switch>
        {aliasRoutes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to="Menu" />
      </Switch>
    
  );
}

export default AliasRouter;

/*

import {useContext} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AliasContext } from "./AliasProvider";
import Game from "./Game";
import Start from "./Start";
import Settings from "./Settings";
import Quit from "./Quit";
import Menu from "./Menu";
import TeamSelect from "./TeamSelect";
import StepFor from "./StepFor";
import History from "./History";

function AliasRouter() {
  const { theme } = useContext(AliasContext);
  return (
    <Router>
      <div className="alias" style={{ backgroundColor: theme }}>
        <h1>ALIAS</h1>
        <Switch>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/StepFor">
            <StepFor />
          </Route>
          <Route path="/TeamSelect">
            <TeamSelect />
          </Route>
          <Route path="/Start">
            <Start />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/Quit">
            <Quit />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
          <Redirect to="Menu" />
        </Switch>
      </div>
    </Router>
  );
}

export default AliasRouter;
*/
