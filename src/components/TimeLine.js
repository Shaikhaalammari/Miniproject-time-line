import React from "react";
import ReactDOM from "react-dom";

const TimeLine = (props) => {
  return (
    <div className="timeline">
      <div className="timeline-progress"></div>
      <div className="timeline-items">
        <div className="timeline-item active">
          <div className="timeline-content">Step 1</div>
        </div>
        <div className="timeline-item active">
          <div className="timeline-content">Step 2</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">Step 3</div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">Step 4</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<TimeLine />, document.getElementById("root"));
export default TimeLine;
