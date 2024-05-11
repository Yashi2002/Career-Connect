
//UserProfilePage.js
import React, { Component } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import Services from "./Services"; 
// import MyChatbot from "./MyChatbot"; 
import ServicesNavbar from "./ServicesNavbar";
import Profile from "../Profile";
// import ChatbotPage from "./ChatbotPage"

function UserProfilePage()  {
    
    return (
        <div className="profile">
          <div className="left-panel">
            {/* User Profile Section */}
            <Profile />
            {/* ... other user profile details ... */}
    
            {/* Services Navbar */}
            <ServicesNavbar />
          </div>
          <div className="left-panel">
            {/* Chat Box Section */}
            {/* <ChatbotPage /> */}
            {/* ... implement your chat box component or functionality here ... */}
          </div>
        </div>
      );
    }
    
  
  export default UserProfilePage;
