import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';



const App = () => {
  const [ character, setCharacter ] = useState([]);
  console.log(character)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      const results = response.data.results;
      setCharacter(results)
    })

  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
       <Character  character={character}/>
    </div>
  );
}

export default App;
