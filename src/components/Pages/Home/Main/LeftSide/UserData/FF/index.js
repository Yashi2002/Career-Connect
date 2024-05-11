
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Follower from "./Follower";
import Following from "./Following";

class FF extends Component {
  render() {
    return (
        <ul className="user-fw-status">
          <Follower user={this.props.user} />
          <Following user={this.props.user} />
          <li>
            <Link to="/profile" title="">
              View Profile
            </Link>
          </li>
        </ul>
       
    );
  }
}

export default FF;