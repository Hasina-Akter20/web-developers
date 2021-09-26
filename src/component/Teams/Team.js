import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import TeamCart from "../TeamCart/TeamCart";
import TeamViewer from "../TeamViewer/TeamViewer";
import "./Team.css";
const Team = () => {
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState([]);

  //    load data
  useEffect(() => {
    fetch("./workTeam.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  const handleAddToTeam = (eventTeam) => {
    const newTeam = [...team, eventTeam];
    setTeam(newTeam);
  };
  return (
    <div className="team-container">
      <div className="team-cart">
        {teams.map((team) => (
          <TeamCart
            key={team.key}
            team={team}
            handleAddToTeam={handleAddToTeam}
          ></TeamCart>
        ))}
      </div>
      <div className="team-count">
        <Cart team={team}></Cart>
        {team.map((teamSet) => (
          <TeamViewer teamSet={teamSet} key={teamSet.key}></TeamViewer>
        ))}
      </div>
    </div>
  );
};

export default Team;
