import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import { AuthContextProvider } from "../contexts/AuthenticationContext";
import Menu from "../pages/Menu";
import ClientInfo from "../pages/ClientInfo";

function Routes() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/clientInfo/:name/:id" component={ClientInfo} />
      </Switch>
    </AuthContextProvider>
  );
}

export { Routes };
