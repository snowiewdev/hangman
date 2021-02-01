import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notfication from './components/Notification';
import PopUp from './components/PopUp';
import { showNotification as show } from './helpers/helper';

import './App.css';

const words = ['cat', 'dog', 'giraffe', 'pig', 'mouse', 'snake', 'lion', 'tiger', 'goldfish','bear'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {

  const [ playable, setPlayable ] = useState(true);
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ showNotification, setShowNotification ] = useState(false);

  useEffect(()=> {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters( currentLetters => [...currentLetters, letter] );
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters( currentLetters => [...currentLetters, letter] );
            } else {
              show(setShowNotification);
            }
          }
        }
    };

    window.addEventListener('keydown', handleKeydown);

    //clean up listening to prevent slowing down
    return () => window.removeEventListener('keydown', handleKeydown);

  }, [ correctLetters, wrongLetters, playable ]); 
  // each time the variables in array get updated, it calls functions in useEffect

  function playAgain(){
    setPlayable(true);

    // empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // new random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (  
    <>
      <Header />
      <div className="game-container"> 
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <PopUp 
        correctLetters={correctLetters} 
        wrongLetters={wrongLetters} 
        selectedWord={selectedWord} 
        setPlayable={setPlayable} 
        playAgain={playAgain}
      />
      <Notfication showNotification={showNotification} />
    </>
  );
}

export default App;
