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
  const [otp, setOtp] = useState(null);
  const [otpstatus, setOtpstatus] = useState(true);

  const generateOTP = async () => {
    try {
      const response = await fetch("/getDriver/otp", {
        method: "POST",
        body: JSON.stringify({
          mail: MailInputRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      setOtp(data);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

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

    const otpVal = OTPInputRef.current.value;
    if (otp == otpVal) {
      setOtpstatus(true);
      findDriver();
    } else {
      setOtpstatus(false);
    }
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
              <input
                type="text"
                name="email"
                ref={MailInputRef}
                required
              ></input>
              <br></br>

              <label>OTP: </label>
              <input type="number" ref={OTPInputRef} required></input>
              <br></br>
            </div>
            <div className="btnPanel">
              <button className="bookBtn" onClick={generateOTP}>
                Generate OTP
              </button>
              <button className="bookBtn" type="submit">
                book ride
              </button>
            </div>
          </form>
          <div className={otpstatus ? "correct" : "incorrect"}>
            OTP Incorrect!!
          </div>
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
