
import { useState, useEffect } from "react";
import './ChronologyPage.scss';
import { getAllCharacters } from "../../api/fetchToApi";
import Chronology from "../../components/Chronology/Chronology";


const ChronologyPage = () => {
    const [characters, setCharacters] = useState([]);
   // const [ ageOrder, setAgeOrder ] = useState(true)

    const charactersFiltred = [] 
   
    
    for (let character of characters) {

      if (character.age && character.age.age !== null && character.age.age !== undefined) {
  
        charactersFiltred.push(character)
      }
    }
    
    // const changeOrder = () => {

    //   if (ageOrder) {

    //     charactersFiltred.sort( function (a , b) {
    //       if( a.age.age < b.age.age ) {
    //         return 1;
    //       } 
    //         if (a.age.age > b.age.age) {
    //           return -1;
    //       }
    //         return 0;
    //     }) 

    //   } else {

    //     charactersFiltred.sort( function (a , b) {
    //       if( a.age.age > b.age.age ) {
    //         return 1;
    //       } 
    //         if (a.age.age < b.age.age) {
    //           return -1;
    //       }
    //         return 0;
    //     }) 

    //   }

    // }
    

    console.log(charactersFiltred);



    useEffect(() => {
      getAllCharacters().then((data) => {
        setCharacters(data);
       // changeOrder()
      });

    }, []); 

  
    return (
      <div>
        <h2>Cronología</h2>
        <hr />
        {/* <button onClick={changeOrder}>Order</button> */}
        <div className="chonology-container">
        {charactersFiltred.map((character) => (
          <Chronology key={character.id} character={character}/>
        ))}
        </div>
      </div>
    );
  };

export default ChronologyPage;
