import React from "react";
import "./CharacterCardDetail.scss";

const CharacterCardDetail = ({ character }) => {
  return (
    <div className="detail">
      <div className="detail__character">
        <img src={character.image} alt={character.name} />
        <h4>{character.name}</h4>
      </div>
      <div className="character__info">
        <div className="character__info--card">
          <h2>Casa</h2>
          {character.house}
        </div>

        <div className="character__info--card">
          <h2>Alianzas</h2>
          {character.allegiances.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="character__info--card">
          <h2>Apariciones</h2>
          {character.appearances.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="character__info--card">
          <h2>Padre</h2>
          {character.father}
        </div>

        <div className="character__info--card">
          <h2>Descendientes</h2>
          {character.siblings.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <div className="character__info--card">
          <h2>Títulos</h2>
          {character.titles.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCardDetail;
