import "./Bookpanel.css";
import Driver from "./Driver";

function Bookpanel() {
  return (
    <>
      <div className="bookpanel">
        <h1>Book Now</h1>
        <img src="./images/delhimap.jpg" className="googlemapimg"></img>

        <div className="bookinput">
          <form className="bookingform">
            <div className="bookingleft">
              <label>When: </label>
              <input type="time"></input>
              <br></br>

              <label>Mobile No.: </label>
              <input type="number"></input>
              <br></br>

              <label>OTP: </label>
              <input type="number"></input>
              <br></br>
            </div>
            <button className="bookBtn" type="submit">
              book a ride
            </button>
          </form>
        </div>
      </div>
      <Driver
        name="Amit Jha"
        gender="Male"
        rides="46"
        rating="4.5"
        contact="8849235812"
      />
    </>
  );
}
export default Bookpanel;
