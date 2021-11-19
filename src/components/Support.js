import "./Support.css";

function Support() {
  return (
    <>
      <div className="supportChat">
        <div className="supportUp">Send us a message</div>
        <div className="messages">random msg but a long one baby</div>
        <div className="messages">random msg</div>
        <div className="messages">random msg</div>
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
