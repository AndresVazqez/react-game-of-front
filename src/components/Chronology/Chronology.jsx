import React from "react";
import "./Chronology.scss";

const Chronology = ({ character }) => {


  return (
    <figure className="chrono">   
        <div className="chrono__card">
          <h4>{character.name}</h4>
          <h4>{character.age.age}</h4>
          <img src={ character.image } alt={character.name} />
        </div>    
    </figure>
  );
};

export default Chronology;
