import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <div className="navbar fixed-top">
  <span className="navbar-brand justify-content-left">
    Clicky Game
  </span>
  <span className={props.message.indexOf('incorrectly') !== -1 ? 
"desc-incorrect" : 
props.message.indexOf('correctly') !== -1 ?
    "desc-correct" :
    "desc-normal"}
>
{props.message}
  </span>
  <span className=" justify-content-left">
      Current Score: {props.Score} | Top Score: {props.topScore}
  </span >
</div>
);

export default Navbar;

