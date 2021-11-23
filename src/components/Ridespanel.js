function Ridespanel(props) {
  return (
    <>
      <div className="ridePanel" key={props.index}>
        <div className="rideupper">
          <div className="rideleft">
            <div>
              <h4>Ride Date: </h4>
              <span>{props.date}</span>
            </div>

            <div>
              <h4>Total: </h4>
              <span>₹ {props.fare}</span>
            </div>
          </div>
          <h4 className="rideright">View Ride details</h4>
        </div>
        <div className="ridebelow">
          <div className="ridespic"></div>
          <div className="hospdetails">
            <div className="address">
              To <br></br>
              {props.destination}
            </div>
            <div className="ridername">Driver: {props.driver}</div>
          </div>
          <div className="rideBtns">
            <button>Write a review</button>
            <button>Driver Feedback</button>
            <button>Invoice</button>
            <button>Book Again</button>
            <button>Talk to Support</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ridespanel;
