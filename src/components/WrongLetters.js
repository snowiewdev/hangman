import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  let lives = [];
  for(let i = 6 - wrongLetters.length ; i > 0 ; i--) {
    lives.push('❤️');
  }


  return (
    <div className="wrong-letters-container">
      <div className="lives">
        <p> 🤵 Man's Life: </p> 
        <p> {lives} </p>
      </div>
      <div>
        <p> ❌ Wrong Guess: </p>
        { wrongLetters.length == 0 && <p> None </p>}
        { wrongLetters
            .map( (letter, i) => (<span key={i}> {letter} </span>) )
        }
      </div>
    </div>
  )
}

export default WrongLetters
