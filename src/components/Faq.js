import { envelope } from "@turf/turf";
import { useState, useEffect, useRef } from "react";
import "./Faq.css";

function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [active, setActive] = useState(false);
  const faqDescriptionInputRef = useRef(null);

  const dispAns = (id) => {
    //TODO -> imrpove the below code and use the useState.
    if (id.target.nextSibling.style.display === "block") {
      id.target.nextSibling.style.display = "none";
    } else {
      id.target.nextSibling.style.display = "block";
    }
    // setActive(!active);
  };

  const sendFaq = async (faq) => {
    try {
      const response = await fetch("/faq", {
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

  const submitForm = (event) => {
    event.preventDefault();
    const faq = faqDescriptionInputRef.current.value;
    sendFaq(faq);
    faqDescriptionInputRef.current.value = "";
  };
  return (
    <>
      <main>
        <h1 className="faq-heading">FAQ</h1>
        <section>
          <div className="faq-one">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              What are examples of a medical emergency?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                Suspected heart attack – may include chest discomfort or
                pressure; suspected stroke – sudden onset of numbness or
                weakness of the face, arm or leg, confusion, trouble speaking,
                understanding or walking, severe headache with no known cause;
                unconscious or fainting – for any reason; severe bleeding – even
                if bleeding has stopped; allergic reaction or asthma attack;
                traumatic injuries; and severe pain
              </p>
            </div>
          </div>

          <hr className="hr-line"></hr>
          <div className="faq-two">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              Which ambulance to select?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                Please go to our about ambulances page to find out more about
                different types of ambulances before booking. post booking
                details can be communicated with qualified professionals on duty
                to make sure the closest appropriate ambulance is dispatched for
                medical transport. This is determined by GPS mapping. Q. Will
                the ambulance take me to the hospital of my choice? A. User can
                choose any Hospital or drop off location, user gets to fill,
                pick up and drop off details on app or web.
              </p>
            </div>
          </div>

          <hr className="hr-line"></hr>
          <div className="faq-three">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              Will the ambulance take me to the hospital of my choice?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                User can choose any Hospital or drop off location, user gets to
                fill, pick up and drop off details on app or web.
              </p>
            </div>
          </div>

          <hr className="hr-line"></hr>
          <div className="faq-four">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              What are the qualifications of the staff on the ambulance?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                Our quality ambulance service partners provide certified drivers
                and qualified attendants, or paramedics
              </p>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <div className="faq-five">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              Does Med Cabs provide non-critical transportation?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                Med Cabs provides and promotes the use of patient transport
                (non-critical ambulances) as hiring taxis or self owned cars for
                transportation while injured or recovering from injury are
                unhealthy practices, aggravates injuries.
              </p>
            </div>
          </div>
          <hr className="hr-line"></hr>
          <div className="faq-six">
            <h1 className="faq-page" onClick={(id) => dispAns(id)}>
              What does medical insurance cover?
            </h1>
            <div className={active ? "faq-body active" : "faq-body"}>
              <p>
                Ambulance transportation coverage varies from insurance policy
                to policy. It is important to review your coverage and
                understand the limitations and requirements of your coverage.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="feedback subhead">
        <h1 className="topic">Ask a question</h1>
        <div className="desc2">Our experts will answer your queries.</div>
        <form onSubmit={submitForm}>
          <textarea
            type="text"
            className="userQue"
            placeholder="Ask your question here"
            ref={faqDescriptionInputRef}
          ></textarea>
          <br></br>
          <button type="submit" className="feedbackBtn">
            POST
          </button>
        </form>
      </div>
    </>
  );
}
export default Faq;
