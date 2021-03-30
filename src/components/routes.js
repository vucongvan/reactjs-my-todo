import { Route, Switch } from "react-router-dom";
import Page1 from "./dashboard/page1";
import Page2 from "./dashboard/page2";
import Page3 from "./dashboard/page3";
import About from "./router_demo/about";
import DashBoard from "./router_demo/dashboard";
import Home from "./router_demo/home";

const Not_Found = () => <div>Not found</div>
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/todo" component={Page2} />
      <Route exact path="/router" component={Page3} />
      <Route exact path="/router/home" component={Home} />
      <Route exact path="/router/about" component={About} />
      <Route exact path="/router/dashboard" component={DashBoard} />
      <Route component={Not_Found} />
    </Switch>
  );
};

export default Routes;
