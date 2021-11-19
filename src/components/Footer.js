import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="cities">
          <h1 className="topic">our cities</h1>
          <ul>
            <li>New Delhi</li>
            <li>Ahmedabad</li>
            <li>Chandigarh</li>
            <li>Aurangabad</li>
          </ul>
        </div>
        <div className="contactus">
          <h2 className="topic">Contact us</h2>
          <div className="icons">
            <i className="fab fa-linkedin linkedin"></i>
            <i className="fab fa-facebook fb"></i>
            <i className="fab fa-twitter twitter"></i>
            <i className="fab fa-instagram insta"></i>
            <i className="fas fa-envelope mail"></i>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
