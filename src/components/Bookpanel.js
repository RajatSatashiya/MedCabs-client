import { useEffect, useRef, useState } from "react";
import "./Bookpanel.css";
import mapboxgl from "mapbox-gl";
import turf, { point, distance } from "@turf/turf";
import Driver from "./Driver";

function Bookpanel() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmFqYXRzYXRhc2hpeWEiLCJhIjoiY2t3YWU4NmQyMGk4NzJ1cWxjeDZ3N2wwbyJ9.hsNrw5963B5Zs2yOj5wepA";

  //map and destination
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.283508);
  const [lat, setLat] = useState(28.541229);
  const [zoom, setZoom] = useState(10);

  //form inputs
  const timeInputRef = useRef(null);
  const MailInputRef = useRef(null);
  const OTPInputRef = useRef(null);
  const LocationInputRef = useRef(null);

  //driver values
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [rides, setRides] = useState(null);
  const [rating, setRating] = useState(null);
  const [contact, setContact] = useState(null);
  const [otp, setOtp] = useState(null);
  const [otpstatus, setOtpstatus] = useState(true);

  //mapbox generate map
  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat]);

  //calculate distance
  const getDistance = (latitude, longitude) => {
    var from = point([latitude, longitude]);
    var to = point([lat, lng]);
    var dist = distance(from, to, { units: "kilometers" });
  };

  //get current user location
  const getUserLocation = () => {
    var latitude, longitude;
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getDistance(latitude, longitude);
    });
  };

  //get otp
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
        body: JSON.stringify({
          location: LocationInputRef.current.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      setLng(data["coords"][0]);
      setLat(data["coords"][1]);
      setName(data["driver"][0]["name"]);
      setGender(data["driver"][0]["gender"]);
      setRides(data["driver"][0]["rides"]);
      setRating(data["driver"][0]["rating"]["$numberDecimal"]);
      setContact(data["driver"][0]["contact"]);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    setZoom(17);
    getUserLocation();

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

        <div ref={mapContainer} className="map-container" />

        <div className="bookinput">
          <form className="bookingform" onSubmit={submitForm}>
            <div className="bookingleft">
              <label>When: </label>
              <input type="time" ref={timeInputRef} required></input>
              <br></br>

              <label>Location: </label>
              <input type="text" ref={LocationInputRef} required></input>
              <br></br>

              <label>Email: </label>
              <input type="text" ref={MailInputRef} required></input>
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
        // name={name}
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
