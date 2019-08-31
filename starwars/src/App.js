import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
        setCharacter(res.data.results[0]);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCard name={character.name}
        birth_year={character.birth_year} />
    </div>
  );

}

export default App;
