import { useState, useEffect, useContext } from "react";
import "./Ride.css";
import AuthContext from "../context/authContext";

function Ride() {
  const authContext = useContext(AuthContext);

  const [date, setDate] = useState(null);
  const [fare, setFare] = useState(null);
  const [destination, setDestination] = useState(null);
  const [driver, setDriver] = useState(null);

  const rideHistory = async () => {
    try {
      const response = await fetch("/rides/getRides", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + authContext.token,
        },
      });
      const data = await response.json();
      console.log(data);
      setDate(data["rideHistory"][0]["date"]);
      setFare(data["rideHistory"][0]["price"]["$numberDecimal"]);
      setDestination(data["rideHistory"][0]["destination"]);
      setDriver(data["rideHistory"][0]["driver"]);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  useEffect(() => {
    rideHistory();
  }, []);
  return (
    <>
      <div className="ridePanel">
        <div className="rideupper">
          <div className="rideleft">
            <div>
              <h4>Ride Date: </h4>
              <span>{date}</span>
            </div>

            <div>
              <h4>Total: </h4>
              <span>₹ {fare}</span>
            </div>
          </div>
          <h4 className="rideright">View Ride details</h4>
        </div>
        <div className="ridebelow">
          <div className="ridespic"></div>
          <div className="hospdetails">
            <div className="address">
              To <br></br>
              {destination}
            </div>
            <div className="ridername">Driver: {driver}</div>
          </div>
          <div className="rideBtns">
            <button>Write a review</button>
            <button>Driver Feedback</button>
            <button>Invoice</button>
            <button>Book Again</button>
            <button>Talk to Support</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ride;
