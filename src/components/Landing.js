import { useEffect, useRef } from "react";
import "./landing.css";
import Reviews from "./reviews";
import { Link } from "react-router-dom";

function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqDescriptionInputRef = useRef(null);
  const sendFaq = async (faq) => {
    try {
      const response = await fetch("https://medcabs.herokuapp.com/faq", {
        method: "POST",
        body: JSON.stringify({
          question: faq,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const askQuestion = (event) => {
    event.preventDefault();
    const faq = faqDescriptionInputRef.current.value;
    sendFaq(faq);
    faqDescriptionInputRef.current.value = "";
  };
  return (
    <>
      <div className="landing">
        <div className="leftPart">
          <h1 className="mainTitle">MED CABS</h1>
          <div>
            Feeling sick and unable to reach the clinic?? Med Cabs helps you
            find and book medical cabs near you.
          </div>
          <Link to="/book">
            <button style={{ cursor: "pointer" }}>Book A Ride</button>
          </Link>
        </div>
        <div className="rightPart">
          <img
            className="mapimg"
            src="./images/googleMap.jpg"
            alt="static map"
          ></img>
        </div>
      </div>

      <div className="why subhead">
        <h1 className="topic">Why med cabs?</h1>
        <div className="desc">
          India's first, GPS based technology platform for fast and reliable
          first point medical attention.<br></br> With an increasing emphasis on
          promoting independent living today, having access to the nearest
          ambulance to you can provide much needed peace of mind in a worst case
          scenario.
        </div>
        <img
          className="cabimg"
          src="./images/cabs.png"
          alt="cab illustration"
        ></img>
      </div>

      <div className="features subhead">
        <h1 className="topic">Features</h1>
        <div className="desc">
          India's first, GPS based technology platform for fast and reliable
          first point medical attention. <br></br>With an increasing emphasis on
          promoting independent living today, having access to the nearest
          ambulance to you can provide much needed peace of mind in a worst case
          scenario.
        </div>
      </div>

      <div className="feedback subhead">
        <h1 className="topic">Feedback</h1>
        <div className="desc2">Tell us how we can improve.</div>
        <textarea
          type="text"
          className="userQue"
          placeholder="Share your suggestions and feedback here..."
        ></textarea>
        <div>
          <button
            type="submit"
            className="feedbackBtn"
            ref={faqDescriptionInputRef}
            onClick={askQuestion}
          >
            Submit
          </button>
        </div>
        <div className="reviews">
          <Reviews
            author="Shalini H."
            desc="A helpful and easy to use site for medical use"
          />
          <Reviews
            author="Kedar R."
            desc="Very fast and efficient cab booking process."
          />
          <Reviews
            author="Jason K."
            desc="Cool site, has a lot of scope for the future."
          />
        </div>
      </div>
    </>
  );
}
export default Landing;
