import React, { useState, useEffect } from "react";
import './HousesPage.scss';
import { getAllHouses } from "../../api/fetchToApi";
import HouseCard from "../../components/HouseCard/HouseCard";


const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getAllHouses().then((data) => {
      setHouses(data);
    });
  }, []);

  console.log("Houses:", houses);

  return (
    <div>          
      <div className="houses-container">
      {houses.map((house) => (
        <HouseCard key={house._id} house={house}/>
      ))}
      </div>
    </div>
  );
};

export default Houses;
