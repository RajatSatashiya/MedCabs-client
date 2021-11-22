import { useEffect } from "react";
import "./How.css";

function How() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="howhead">How it works</h1>
      <hr className="how-line"></hr>

      <div className="workspanel">
        <div className="worksbox">
          <h1>1.</h1>
          <h2 className="howTitle">Patient chats with a consultant</h2>
          <div className="howdesc">
            Our patient will chat with the receptionist of a nearby hospital,
            and extracts all necessary patient information in 2 minutes.
          </div>
        </div>
        <img
          src="./images/doctors.jpg"
          alt="doctor illustration"
          className="howimg"
          width="70%"
        ></img>

        <img
          src="./images/uber.jpg"
          alt="uber app on mobile phone"
          className="howimg"
          width="40%"
        ></img>
        <div className="worksbox">
          <h1>2.</h1>
          <h2 className="howTitle">Tech platform finds you the nearest help</h2>
          <div className="howdesc">
            Pre-negotiate the rates for you and dispatches the nearby vehicle.
            We instantly connect you with a Doctor on Call or Video while the
            ambulance reaches.
          </div>
        </div>

        <div className="worksbox">
          <h1>3.</h1>
          <h2 className="howTitle">
            Check out the best hospitals suitable for you!
          </h2>
          <div className="howdesc">
            On our site we have all the information regarding the hospitals and
            the facilities they provide so that u can choose the suitable
            hospital for you.
          </div>
        </div>
        <img
          src="./images/hospital.jpg"
          alt="hospital illustration"
          className="howimg"
          width="70%"
        ></img>
      </div>
    </>
  );
}
export default How;
