import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {
  return (
    <Link to={generatePath("/characters/:name", { name: character.name })}>
      <figure className="character">
        <div className="character__container">
          <img src={character.image} alt={character.name} />
          <h4>{character.name}</h4>
        </div>
      </figure>
    </Link>
  );
};

export default CharacterCard;
