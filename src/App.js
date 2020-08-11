import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import AriclesListPage from "./pages/AriclesListPage";
import ArticlePage from "./pages/ArticlePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page-body">
        <Switch>
          {" "}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/articles-list" component={AriclesListPage} />
          <Route exact path="/article/:name" component={ArticlePage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
