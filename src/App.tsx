import "./App.css";

import { Affix, Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppHeader, Home, Rovers } from "./components";

function App() {
  return (
    <Router>
      <Layout id="app">
        <Affix offsetTop={0}>
          <AppHeader />
        </Affix>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rovers" component={Rovers} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
