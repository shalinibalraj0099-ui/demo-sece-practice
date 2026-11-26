import "./boxes.css";
const BoxComponent = () => {
  return (
    <div className="parent">
      <div className="child">
        <div className="value">100+</div> <div className="detail">Colleges</div>
      </div>
      <div className="child">
        <div className="value">150</div>{" "}
        <div className="detail">professional trainers </div>
      </div>
      <div className="child">
        <div className="value">1000+</div>{" "}
        <div className="detail">study materials</div>
      </div>
      <div className="child">
        <div className="value">10000</div>{" "}
        <div className="detail">students</div>
      </div>
    </div>
  );
};
export default BoxComponent;
