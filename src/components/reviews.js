import "./reviews.css";

function reviews(props) {
  return (
    <>
      <div className="reviewPanel">
        <i className="fas fa-quote-left"></i>
        <div className="review">{props.desc}</div>
        <span className="author">{props.author}</span>
      </div>
    </>
  );
}
export default reviews;
