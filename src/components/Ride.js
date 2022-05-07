import { useState, useEffect, useContext } from "react";
import "./Ride.css";
import AuthContext from "../context/authContext";
import Ridespanel from "./Ridespanel";

function Ride() {
  const authContext = useContext(AuthContext);
  const [rides, setRides] = useState(null);

  const rideHistory = async () => {
    try {
      const response = await fetch(
        "https://medcabs.herokuapp.com/rides/getRides",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + authContext.token,
          },
        }
      );
      const data = await response.json();
      setRides(data);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  //get all rides and load the component
  var loadRides = () => {
    if (rides != null) {
      return rides["rideHistory"].map((ride, index) => (
        <Ridespanel
          key={index}
          date={ride["date"]}
          fare={ride["price"]["$numberDecimal"]}
          destination={ride["destination"]}
          driver={ride["driver"]}
        />
      ));
    }
  };

  useEffect(() => {
    rideHistory();
  }, []);
  return (
    <>
      <div>{loadRides()}</div>
    </>
  );
}
export default Ride;
