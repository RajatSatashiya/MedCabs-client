import { useContext } from "react";
import UserContext from "../context/userContext";
import { Link } from "react-router-dom";

function Ridespanel(props) {
  const userContext = useContext(UserContext);
  const changeLocation = () => {
    userContext.writeLocation(props.destination);
  };

  return (
    <>
      <div className="ridePanel" key={props.index}>
        <div className="rideupper">
          <div className="rideleft">
            <div>
              <h4>Ride Date: </h4>
              <span>{props.date}</span>
            </div>

            <div>
              <h4>Total: </h4>
              <span>₹ {props.fare}</span>
            </div>
          </div>
          <h4 className="rideright">View Ride details</h4>
        </div>
        <div className="ridebelow">
          <div className="ridespic"></div>
          <div className="hospdetails">
            <div className="address">
              To <br></br>
              {props.destination}
            </div>
            <div className="ridername">Driver: {props.driver}</div>
          </div>
          <div className="rideBtns">
            <button>Write a review</button>
            <button>Driver Feedback</button>
            <button>Invoice</button>
            <button>
              <Link to="/book" onClick={changeLocation}>
                Book Again
              </Link>
            </button>
            <button>
              <Link to="/support">Talk to Support</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ridespanel;
