import React from "react";
import "./Chronology.scss";

const Chronology = ({ character }) => {
  return (
    <figure className="chrono">
      {character.age && character.age.age !== null && character.age.age !== undefined ? (
        <div className="chrono__container">
          <h4>{character.name}</h4>
          <h4>{character.age.age}</h4>
          <img src={character.image} alt={character.name} />
        </div>
      ) : null}
    </figure>
  );
};

export default Chronology;
