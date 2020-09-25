import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search" exact component={SearchPage} />
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/:id" exact component={Dashboard} />
          <Route path="/booking/:modal_id/:title" exact component={Modal} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
