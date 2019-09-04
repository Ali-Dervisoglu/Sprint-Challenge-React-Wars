import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState( [ { } ] )
  // const [character1, setCharacter1] = useState([]);
  // const [character2, setCharacter2] = useState([]);
  // const [character3, setCharacter3] = useState([]);
  // const [character4, setCharacter4] = useState([]);
  // const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
        // setCharacter1(res.data.results[0]);
        // setCharacter2(res.data.results[1]);
        // setCharacter3(res.data.results[2]);
        // setCharacter4(res.data.results[3]);
        // setCharacters(res.data.results)
        setCharacter(res.data.results);
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div class="character-card"><CharacterCard name={character[0].name}
        birth_year={character[0].birth_year}
        gender={character[0].gender}
        hair_color={character[0].hair_color}
        eye_color={character[0].eye_color}
        skin_color={character[0].skin_color} /></div>
      {/* <div class="character-card"><CharacterCard name={character1.name}
        birth_year={character1.birth_year}
        gender={character1.gender}
        hair_color={character1.hair_color}
        eye_color={character1.eye_color}
        skin_color={character1.skin_color} /></div>
      <div class="character-card"><CharacterCard name={character2.name}
        birth_year={character2.birth_year}
        gender={character2.gender}
        hair_color={character2.hair_color}
        eye_color={character2.eye_color}
        skin_color={character2.skin_color} /></div>
      <div class="character-card"><CharacterCard name={character3.name}
        birth_year={character3.birth_year}
        gender={character3.gender}
        hair_color={character3.hair_color}
        eye_color={character3.eye_color}
        skin_color={character3.skin_color} /></div>
      <div class="character-card"><CharacterCard name={character4.name}
        birth_year={character4.birth_year}
        gender={character4.gender}
        hair_color={character4.hair_color}
        eye_color={character4.eye_color}
        skin_color={character4.skin_color} /></div> */}
    </div>
  );

}

export default App;
