import { useRef, useState } from "react";
import "./Bookpanel.css";
import Driver from "./Driver";

function Bookpanel() {
  const timeInputRef = useRef(null);
  const MailInputRef = useRef(null);
  const OTPInputRef = useRef(null);

  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [rides, setRides] = useState(null);
  const [rating, setRating] = useState(null);
  const [contact, setContact] = useState(null);

  const findDriver = async () => {
    try {
      const response = await fetch("/getDriver", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      setName(data[0]["name"]);
      setGender(data[0]["gender"]);
      setRides(data[0]["rides"]);
      setRating(data[0]["rating"]["$numberDecimal"]);
      setContact(data[0]["contact"]);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    // const time = timeInputRef.current.value;
    // const mobile = MobileInputRef.current.value;
    // const otp = OTPInputRef.current.value;

    findDriver();
  };
  return (
    <>
      <div className="bookpanel">
        <h1>Book Now</h1>
        <img
          src="./images/delhimap.jpg"
          className="googlemapimg"
          alt="static map"
        ></img>

        <div className="bookinput">
          <form className="bookingform" onSubmit={submitForm}>
            <div className="bookingleft">
              <label>When: </label>
              <input type="time" ref={timeInputRef} required></input>
              <br></br>

              <label>Email: </label>
              <input type="text" ref={MailInputRef} required></input>
              <br></br>

              <label>OTP: </label>
              <input type="number" ref={OTPInputRef} required></input>
              <br></br>
            </div>
            <div className="btnPanel">
              <button className="bookBtn">Generate OTP</button>
              <button className="bookBtn" type="submit">
                book ride
              </button>
            </div>
          </form>
        </div>
      </div>
      <Driver
        name={name}
        gender={gender}
        rides={rides}
        rating={rating}
        contact={contact}
      />
    </>
  );
}
export default Bookpanel;
