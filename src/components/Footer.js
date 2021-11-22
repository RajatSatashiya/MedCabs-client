import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

function Footer() {
  const authContext = useContext(AuthContext);
  const logout = () => {
    window.scrollTo(0, 0);
    authContext.logout();
  };
  return (
    <>
      <footer>
        <div className="cities">
          <h1 className="topic">Also visit</h1>
          <div className="">
            <ul>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/how">
                <li>How It Works</li>
              </Link>
              <Link to="/support">
                <li>Customer Support</li>
              </Link>
              <Link to="/">
                <li onClick={logout}>Log Out</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="cities">
          <h1 className="topic">our cities</h1>
          <ul>
            <li>New Delhi</li>
            <li>Ahmedabad</li>
            <li>Chandigarh</li>
            <li>Aurangabad</li>
          </ul>
        </div>
        <div className="contactus">
          <h2 className="topic">Contact us</h2>
          <div className="icons">
            <i className="fab fa-linkedin linkedin"></i>
            <i className="fab fa-facebook fb"></i>
            <i className="fab fa-twitter twitter"></i>
            <i className="fab fa-instagram insta"></i>
            <i className="fas fa-envelope mail"></i>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
