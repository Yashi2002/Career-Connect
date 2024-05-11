
//UserProfilePage.js
import React, { Component } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Services from "./Services"; 
// import MyChatbot from "./MyChatbot"; 
import ServicesNavbar2 from "./ServicesNavbar2";
import Profile from "../../../LeftSide/UserData/Profile";
// import ChatbotPage from "./ChatbotPage"

function MentorProfile()  {
    
    return (
        <div className="profile">
          <div className="left-panel">
            {/* User Profile Section */}
            <Profile />
            {/* ... other user profile details ... */}
    
            {/* Services Navbar */}
            <ServicesNavbar2 />
          </div>
          <div className="left-panel">
            {/* Chat Box Section */}
            {/* <ChatbotPage /> */}
            {/* ... implement your chat box component or functionality here ... */}
          </div>
        </div>
      );
    }
    
  
  export default MentorProfile;
