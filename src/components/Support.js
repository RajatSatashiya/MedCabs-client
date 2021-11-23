import { useEffect } from "react";
import "./Support.css";

function Support() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="supportChat">
        <div className="supportUp">Send us a message</div>
        <div className="messages">random msg#1</div>
        <div className="messages">random msg#2</div>
        <div className="messages">random msg#3 in the longer forma</div>
        <div className="supportDown">
          <input
            type="text"
            className="supportInput"
            placeholder="Type a message..."
          ></input>
          <i className="fas fa-play"></i>
        </div>
      </div>
    </>
  );
}
export default Support;
