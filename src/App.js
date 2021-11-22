import "./App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthContext from "./context/authContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import How from "./components/How";
import Ridehistory from "./pages/Ridehistory";
import Support from "./pages/Support";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Faq from "./pages/Faq";

function App() {
  const authContext = useContext(AuthContext);
 
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/login">
            {authContext.isLoggedIn && <Redirect to="/" />}
            {!authContext.isLoggedIn && <Login />}
          </Route>

          <Route path="/signup">
            {authContext.isLoggedIn && <Redirect to="/" />}
            {!authContext.isLoggedIn && <Signup />}
          </Route>

          <Route path="/book">
            {authContext.isLoggedIn && <Book />}
            {!authContext.isLoggedIn && <Redirect to="/" />}
          </Route>

          <Route path="/rides">
            {authContext.isLoggedIn && <Ridehistory />}
            {!authContext.isLoggedIn && <Redirect to="/" />}
          </Route>

          <Route path="/support">
            {authContext.isLoggedIn && <Support />}
            {!authContext.isLoggedIn && <Redirect to="/" />}
          </Route>

          <Route path="/how" component={How} />
          <Route path="/faq" component={Faq} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
