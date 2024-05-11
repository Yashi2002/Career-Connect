import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesNavbar = () => {
  const [showOptions, setShowOptions] = useState(false); // State to manage visibility of options

  // Function to toggle visibility of options
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="services-navbar">
      <ul>
        <li>
          {/* Use onClick to toggle visibility of options */}
          <a href="#" onClick={toggleOptions} style={{ color: "black" }}>
            1:1 Call
          </a>
          {/* Render options based on visibility state */}
          {showOptions && (
            <ul className="options-list">
              <li>Discovery Call</li>
              <li>Public 15 mins | $ 0+</li>
              <li>Interview prep & tips Public 30 mins | $ 30+</li>
              <li>Quick chat Public 30 mins | $ 30+</li>
            </ul>
          )}
        </li>
        <li>
        <Link to="/profile/services/private-dms" style={{ color: "black" }}>
            Private DMs
          </Link>
        </li>
        <li>
          <Link to="/profile/services/group-session" style={{ color: "black"}}>Group Session</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ServicesNavbar;
