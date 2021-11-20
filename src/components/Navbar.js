import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-header">
          <div>
            <h2 className="heading">
              <i className="fas fa-car"></i>
            </h2>
          </div>
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="nav-items">
          <ul className="links">
            <li>
              <Link to="/" className="scroll-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/book" className="scroll-link">
                BOOK A RIDE
              </Link>
            </li>
            <li>
              <Link to="/rides" className="scroll-link">
                RIDE HISTORY
              </Link>
            </li>

            <li>
              <Link to="/login" className="scroll-link">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
