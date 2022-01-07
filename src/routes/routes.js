import { Switch, Route } from "react-router-dom";
// AsyncComponent
import loadable from "@loadable/component";
// Routes
const Home = loadable(() => import("./../pages/home"));
const Trade = loadable(() => import("./../pages/trade"));
const Price = loadable(() => import("./../pages/price"));
const Faq = loadable(() => import("./../pages/faq"));
const About = loadable(() => import("./../pages/about"));
const Contact = loadable(() => import("./../pages/contact"));
const Login = loadable(() => import("./../pages/login"));
const Register = loadable(() => import("./../pages/register"));

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trade" component={Trade} />
      <Route path="/price" component={Price} />
      <Route path="/faq" component={Faq} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;