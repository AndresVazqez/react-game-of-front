import { useState, useEffect } from "react";
import { getCharacter, getAllHouses} from "../../api/fetchToApi";
import { useParams } from "react-router-dom";
import CharacterCardDetail from "../../components/CharacterCardDetail/CharacterCardDetail";


const CharacterDetailPage = () => {
  let {id} = useParams ("id");
    const [character, setCharacter] = useState([]);
    const [charhouse, setCharhouse] = useState([]);

    useEffect(() => {
        if (id)
          getCharacter(id).then((data) => {
            setCharacter(data);
          });

          getAllHouses().then((data) => {
            setCharhouse(data);

          });
      }, []);

      return (
        <div>
          {character.length !== 0 ? <CharacterCardDetail character={character} charhouse={charhouse} /> : null }
        </div>
      );

    };

    export default CharacterDetailPage;