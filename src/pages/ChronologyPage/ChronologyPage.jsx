
import { useState, useEffect } from "react";
import './ChronologyPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import Chronology from "../../components/Chronology/Chronology";


const ChronologyPage = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      getAllCharacters().then((data) => {
        setCharacters(data);
      });
    }, []);
  
    console.log("Characters:", characters);
  
    return (
      <div>
        <h2>Cronología</h2>
        <hr />
        <div className="chonology-container">
        {characters.map((character) => (
          <Chronology key={character.id} character={character}/>
        ))}
        </div>
      </div>
    );
  };

export default ChronologyPage;
