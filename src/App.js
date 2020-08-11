import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import AriclesList from "./pages/AriclesList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-body">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/articles-list" component={AriclesList} />
        <Route exact path="/article" component={AriclesList} />
      </div>
    </div>
  );
}

export default App;
