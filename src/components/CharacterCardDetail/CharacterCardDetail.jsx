import React from "react";
import "./CharacterCardDetail.scss";
import { FormattedMessage } from "react-intl";



const CharacterCardDetail = ({ character, charhouse }) => {
  return (

      <div className="detail">
        <div className="detail__character">
          <div className="detail__character--img">
            <img
              src={
                !character.image
                  ? (character.image = "./Images/nicolas-cage-of-thrones.jpg")
                  : character.image
              }
              alt={character.name}
            />
          </div>
          <h4>{character.name}</h4>
        </div>

        <div className="detail__info">
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="house" defaultMessage="casa" />
            </h2>
            <div className="detail__info--card--list">
              {charhouse.map((house) => {
                if (house.name === character.house) {
                  return <img src={house.logoURL} alt={house.name} />;
                } else {
                  return null ;
                }
              })}
            </div>
          </div>
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="allegiance" defaultMessage="alianzas" />
            </h2>
            <div className="detail__info--card--list">
              {character.allegiances.map((item) => (
                <p key={item.allegiances}>{item}</p>
              ))}
            </div>
          </div>
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="appearances" defaultMessage="apariciones" />
            </h2>
            <div className="detail__info--card--list">
              {character.appearances.map((item) => (
                <p key={item.appearances}>{item}</p>
              ))}
            </div>
          </div>
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="father" defaultMessage="padre" />
            </h2>
            <div className="detail__info--card--list">
              <p>{character.father}</p>
            </div>
          </div>
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="siblings" defaultMessage="descendientes" />
            </h2>
            <div className="detail__info--card--list">
              {character.siblings.map((item) => (
                <p key={item.siblings}>{item}</p>
              ))}
            </div>
          </div>
          <div className="detail__info--card">
            <h2>
              <FormattedMessage id="titles" defaultMessage="titulos" />
            </h2>
            <div className="detail__info--card--list">
              {character.titles.map((item) => (
                <p key={item.titles}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CharacterCardDetail;
