import { useEffect, useRef, useState, useContext } from "react";
import "./Bookpanel.css";
import mapboxgl from "mapbox-gl";
import { point, distance } from "@turf/turf";
import Driver from "./Driver";
import AuthContext from "../context/authContext";
import UserContext from "../context/userContext";

function Bookpanel() {
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  mapboxgl.accessToken =
    "pk.eyJ1IjoicmFqYXRzYXRhc2hpeWEiLCJhIjoiY2t3YWU4NmQyMGk4NzJ1cWxjeDZ3N2wwbyJ9.hsNrw5963B5Zs2yOj5wepA";

  //map and destination
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.283508);
  const [lat, setLat] = useState(28.541229);
  const [zoom, setZoom] = useState(10);
  const [fare, setFare] = useState(0);

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
  }, [lng, lat, zoom]);

  //calculate distance
  const getDistance = (latitude, longitude) => {
    var from = point([latitude, longitude]);
    var to = point([lat, lng]);
    var totalDist = distance(from, to, { units: "kilometers" });
    setFare(Math.floor(totalDist) * 14);
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

  //get otp -> fetch request
  const generateOTP = async () => {
    try {
      const response = await fetch(
        "https://medcabs.herokuapp.com/getDriver/otp",
        {
          method: "POST",
          body: JSON.stringify({
            mail: MailInputRef.current.value,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      setOtp(data);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  //get driver -> fetch request
  const findDriver = async () => {
    try {
      const response = await fetch("https://medcabs.herokuapp.com/getDriver", {
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

      if (fare != 0 && fare < 3000) {
        saveRide();
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  // save ride info -> fetch request
  const saveRide = async () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const date = day + "/" + month + "/" + year;

    try {
      const response = await fetch("https://medcabs.herokuapp.com/rides/save", {
        method: "POST",
        body: JSON.stringify({
          date,
          price: fare,
          destination: LocationInputRef.current.value,
          driver: name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + authContext.token,
        },
      });
      const data = await response.json();
    } catch (error) {
      console.log("error: " + error);
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
              <input
                type="text"
                ref={LocationInputRef}
                defaultValue={userContext.location}
                required
              ></input>
              <br></br>

              <label>Email: </label>
              <input
                type="text"
                ref={MailInputRef}
                defaultValue={userContext.email}
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
        // name={name}
        fare={fare}
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
