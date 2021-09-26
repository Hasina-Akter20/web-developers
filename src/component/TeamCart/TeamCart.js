import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import "./TeamCart.css";
const TeamCart = (props) => {
 
  const { name, age, img, designation, country, salary } = props.team;
  return (
    <div className="team">
      <div className="team-style">
        <img className="img" src={img} alt="" />
        <h2>
          Name : <small>{name}</small>
        </h2>
        <h3>
          Age : <small>{age}</small>
        </h3>
        <h3>
         Designation : <small>{designation}</small>
        </h3>
        <h3>
          Country : <small>{country}</small>
        </h3>
        <h3>
          Salary : $<small>{salary}</small>
        </h3>

        <button
          onClick={() => props.handleAddToTeam(props.team)}
          className="hire-btn"
        >
          Hire Developer <FontAwesomeIcon icon={faUserSecret} />
        </button>
        
      </div>
    </div>
  );
};

export default TeamCart;
