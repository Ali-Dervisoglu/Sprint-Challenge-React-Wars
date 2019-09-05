import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";
import CharacterCards from "./components/CharacterCards.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState( [ { } ] );

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
        setCharacter(res.data.results);
      });
  }, []);

  console.log(character)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterCards characters={character} />
    </div>
  );

}

export default App;
