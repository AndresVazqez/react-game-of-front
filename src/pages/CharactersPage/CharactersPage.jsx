import React, { useState, useEffect } from "react";
import './CharactersPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard";


const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  console.log("Characters:", characters);

  return (
    <div>
      <h2>Characters</h2>
      <hr />
      <div className="characters-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character}/>
      ))}
      </div>
    </div>
  );
};

export default Characters;
