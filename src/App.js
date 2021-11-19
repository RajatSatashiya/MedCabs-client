import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import How from "./components/How";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/how" component={How} />
          <Route path="/book" component={Book} />
          <Route path="/faq" component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
