import React from "react";
import "./CharacterCardDetail.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const CharacterCardDetail = ({ character }) => {

  
 

 
  return (
    <div className="detail">
      <Link className="volver"  to="/characters"><img src="../Images/Vector.png" alt="arrow-back" /> Volver</Link>

      <div className="detail__character">
        <div className="detail__character--img">
            <img src={ !character.image ? character.image = './Images/nicolas-cage-of-thrones.jpg' : character.image } alt={character.name} />
        </div>        
        <h4>{character.name}</h4>
      </div>

      <div className="detail__info">
        <div className="detail__info--card">
          <h2>Casa</h2>
          <div className="detail__info--card--list">
            <p>{character.house}</p>
          </div>
        </div>
        <div className="detail__info--card">
          <h2>Alianzas</h2>
          <div className="detail__info--card--list">
            {character.allegiances.map((item) => (
              <p key={item.allegiances}>{item}</p>
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>Apariciones</h2>
          <div className="detail__info--card--list">
            {character.appearances.map((item) => (
              <p key={item.appearances}>{item}</p>
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>Padre</h2>
          <div className="detail__info--card--list">
            <p>{character.father}</p>
          </div>
        </div>
        <div className="detail__info--card">
          <h2>Descendientes</h2>
          <div className="detail__info--card--list">
            {character.siblings.map((item) => (
              <p key={item.siblings}>{item}</p>
            ))}
          </div>
        </div>
        <div className="detail__info--card">
          <h2>Títulos</h2>
          <div className="detail__info--card--list">
            {character.titles.map((item) => (
              <p key={item.titles}>{item}</p>))}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default CharacterCardDetail;
