import Support from "../components/Support";

function Supportpage() {
  return (
    <>
      <h1 className="howhead">Support</h1>
      <hr className="how-line"></hr>

      <div className="staticImg">
        <img src="./images/shake.png" width="15%"></img>
        <div className="trouble">
          HAVING TROUBLE ?<br></br> WE ARE HERE TO HELP{" "}
        </div>
      </div>
      <Support />
    </>
  );
}

export default Supportpage;
