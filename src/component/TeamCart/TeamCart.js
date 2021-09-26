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
          Name : <span>{name}</span>
        </h2>
        <h3>
          Age : <span>{age}</span>
        </h3>
        <h3>
          Designation : <span>{designation}</span>
        </h3>
        <h3>
          Country : <span>{country}</span>
        </h3>
        <h3>
          Salary : $<span>{salary}</span>
        </h3>

        <button
          onClick={() => props.handleAddToTeam(props.team)}
          className="hire-btn"
        >
          Hire Developer <FontAwesomeIcon className="icon" icon={faUserSecret} />
        </button>

      </div>
    </div>
  );
};

export default TeamCart;
