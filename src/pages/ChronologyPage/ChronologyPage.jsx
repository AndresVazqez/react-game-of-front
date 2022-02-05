
import { useState, useEffect } from "react";
import './ChronologyPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import Chronology from "../../components/Chronology/Chronology";


const ChronologyPage = () => {
  const [characters, setCharacters] = useState([]);
  const [ageOrder, setAgeOrder] = useState(true)

  const charactersFiltred = []

  for (let character of characters) {

    if (character.age && character.age.age !== null && character.age.age !== undefined) {

      charactersFiltred.push(character)
    }
  }  

  useEffect(() => {
    getAllCharacters().then((data) => {
      setCharacters(data);
    });

  }, []);

  return (
    <div className="chronology">    
      <button className="btnchrono" onClick={() => { ageOrder === true ? setAgeOrder(false) : setAgeOrder(true) }}>O</button>

      <div className="chronology__container">

        {ageOrder === true ? charactersFiltred.sort((prev, next) => prev.age.age - next.age.age).map((character) => (
          <Chronology key={character.id} character={character} />

        )) : charactersFiltred.sort((prev, next) => next.age.age - prev.age.age).map((character) => (
          <Chronology key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default ChronologyPage;
