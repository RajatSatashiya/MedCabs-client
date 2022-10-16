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
      await fetch("/faq", {
        method: "POST",
        body: JSON.stringify({
          question: faq,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // const data = await response.json();
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
        <div className="desc descwhy">
          We will answer this question by asking you another question, would you
          call an ambulance for common cold? <br></br> No right, we have brought
          you with med cabs where you can book medical cabs with ease right away
          from your mobile.
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
          There are several features available for the user to interact with the
          website. <br></br> You can book rides, check ride history and re-book
          a ride, check rider details, provide feedback to developers. One can
          even talk to support staff in case of any issues. A user can use our
          mapbox api to choose a location and perform otp-verification thus
          maintaining the security of every rides booked.
        </div>
      </div>

      <div className="feedback subhead">
        <h1 className="topic">Feedback</h1>
        <div className="desc2">Tell us how we can improve.</div>
        <textarea
          type="text"
          className="userQue"
          placeholder="Share your suggestions and feedback here..."
          ref={faqDescriptionInputRef}
        ></textarea>
        <div>
          <button type="submit" className="feedbackBtn" onClick={askQuestion}>
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
