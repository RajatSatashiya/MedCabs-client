import "./Driver.css";

function Driver(props) {
  return (
    <>
      <div className="driverPanel">
        <h1 className="topic">Driver Details</h1>

        <div className="driverData">
          <div className="driverdesc">
            <span className="dtitle">Driver Name: </span>
            <span>{props.name}</span>
            <br></br>

            <span className="dtitle">Gender: </span>
            <span>{props.gender}</span>
            <br></br>

            <span className="dtitle">Total Rides: </span>
            <span>{props.rides}</span>
            <br></br>

            <span className="dtitle">Rating: </span>
            <span>{props.rating}⭐</span>
            <br></br>

            <span className="dtitle">Contact: </span>
            <span>{props.contact}</span>
          </div>
          <div className="driverLogo">
            <div className="driverImg">
              <img src="./images/male.png" alt="male face illustration"></img>
            </div>
            <div>{props.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Driver;
