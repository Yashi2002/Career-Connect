import React from "react";
import { Link } from "react-router-dom"; 
const Called2 = () => {
  return (
    <div className="calling-container">
      <h2>Calling Options</h2>
      <div className="options-wrapper">
        <div className="option-box" style={{backgroundColor: "#f0f8ff", border: "1px solid #ddd", borderRadius: "5px", padding: "20px" }}>
          <h3>Discovery Call</h3>
          <p>Public | 15 mins | $0+</p>
          <Link to="/book" style={{backgroundColor: "#4CAF50", color: "white", border: "none", padding: "5px 20px", borderRadius: "5px" }}>
            Book Session
          </Link>
        </div>
        <div className="option-box" style={{ backgroundColor: "#f7f1e3", border: "1px solid #ddd", borderRadius: "5px", padding: "20px" }}>
          <h3>Interview Prep & Tips</h3>
          <p>Public | 30 mins | $30+</p>
          <button style={{ backgroundColor: "#ffc107", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Book Session</button>
        </div>
        <div className="option-box" style={{ backgroundColor: "#e8e0d1", border: "1px solid #ddd", borderRadius: "5px", padding: "20px" }}>
          <h3>Quick Chat</h3>
          <p>Public | 30 mins | $30+</p>
          <button style={{ backgroundColor: "#3F51B5", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px" }}>Book Session</button>
        </div>
      </div>
    </div>
  );
};

export default Called2;
