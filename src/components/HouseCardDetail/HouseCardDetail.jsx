import React from "react";
import "./HouseCardDetail.scss";
import { Link } from "react-router-dom";

const HouseCardDetail = ({ house }) => {
  console.log({ house });
  return (
    <div className="c-house">
      <Link className="volver" to="/houses"><img src="../Images/Vector.png" alt="arrow-back" /> Volver</Link>
      <div className="c-house__logo">
        <img src={!house[0].logoURL ? house[0].logoURL = './Images/got-house.png' :  house[0].logoURL } alt={house[0].name} />
        <h4>{house[0].name}</h4>
      </div>

      <div className="c-house__info">
        <div className="c-house__info--card">
          <h2>Lema</h2>
          <p>{house[0].words} </p>         
        </div>

        <div className="c-house__info--card">
          <h2>Sede</h2>
          {!house[0].seat.length ? (
            <p>Don't has seat</p>
          ) : (
            house[0].seat.map((item) => {
              return <p key={item}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
          <h2>Region</h2>
          {!house[0].region.length ? (
            <p>Don't has region</p>
          ) : (
            house[0].region.map((item) => {
              return <p key={item}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
          <h2>Alianzas</h2>
          {!house[0].allegiance.length ? (
            <p>Don't has allegiance</p>
          ) : (
            house[0].allegiance.map((item) => {
              return <p key={item}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
          <h2>Religiones</h2>
          {!house[0].religion.length ? (
            <p>Don't has religion</p>
          ) : (
            house[0].religion.map((item) => {
              return <p key={item}>{item}</p>;
            })
          )}
        </div>

        <div className="c-house__info--card">
          <h2>Fundacion</h2>
          {house[0].createdAt.substr(0, 10)}
        </div>
      </div>
    </div>
  );
};

export default HouseCardDetail;
