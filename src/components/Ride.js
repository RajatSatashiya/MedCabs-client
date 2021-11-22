import "./Ride.css";

function Ride() {
  return (
    <>
      <div className="ridePanel">
        <div className="rideupper">
          <div className="rideleft">
            <div>
              <h4>Ride Date: </h4>
              <span>20/09/21 2pm</span>
            </div>

            <div>
              <h4>Total: </h4>
              <span>12.34 $</span>
            </div>
          </div>
          <h4 className="rideright">View Ride details</h4>
        </div>
        <div className="ridebelow">
          <div className="ridespic"></div>
          <div className="hospdetails">
            <div className="address">
              To Apollo Hospital, GIDC Road, Ahmedabad, 38428
            </div>
            <div className="ridername">Driver: Amit Jha</div>
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
export default Ride;
