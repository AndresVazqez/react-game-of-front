import { useState, useEffect } from "react";
import { getCharacter } from "../../api/fetchToApi";
import { useParams } from "react-router-dom";
import CharacterCardDetail from "../../components/CharacterCardDetail/CharacterCardDetail";


const CharacterDetailPage = () => {
    const [character, setCharacter] = useState([]);
    let {id} = useParams ("id");

    useEffect(() => {
        if (id)
          getCharacter(id).then((data) => {
            setCharacter(data);
          });
      }, []);

      return (
        <div>
          {character.length !== 0 ? <CharacterCardDetail character={character} /> : null }
        </div>
      );
    
    };

    export default CharacterDetailPage;