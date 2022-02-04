import React, { useState, useEffect } from "react";
import './CharactersPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import {Searcher} from "../../components/Searcher/Searcher";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllCharacters().then((data) => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  const filteredChar = characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
	)

  return (
    <div>
      <h2>Characters</h2>
      <Searcher filter={filter} setFilter={setFilter} />
			<div className='characters-container'>
				{loading ? (
					<p>Loading...</p>
				) : filteredChar.length > 0 ? (
					filteredChar.map((character) => (
						<CharacterCard key={character.id} character={character} />
					))
				) : (
					<p>
						Character are not found{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			</div>
    </div>
  );
};

export default Characters;
