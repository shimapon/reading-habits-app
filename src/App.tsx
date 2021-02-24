import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestPage from "./components/pages/TestPage";
import TopPage from "./components/pages/TopPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test" component={TestPage} exact />
        <Route path="/" component={TopPage} exact />
      </Switch>
      <a href="/">topページへ</a>
      <br />
      <a href="/test">testページへ</a>
    </Router>
  );
};
export default App;
