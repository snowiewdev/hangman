import React from 'react'

const Figure = ({ wrongLetters }) => {

  const errors = wrongLetters.length;

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 && <circle cx="140" cy="70" r="20" />}

      {/* <!-- Body --> */}
      {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" />}

      {/* <!-- Arms --> */}
      {errors > 2 && <line x1="140" y1="120" x2="120" y2="100" />}
      {errors > 3 && <line x1="140" y1="120" x2="160" y2="100" />}

      {/* <!-- Legs --> */}
      {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" />}
      {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" />}

      {/* <!-- Dead face --> */}
      {errors > 5 && 
        <>
          <line x1="130" y1="65" x2="135" y2="70" />
          <line x1="130" y1="70" x2="135" y2="65" />
          <line x1="145" y1="65" x2="150" y2="70" />
          <line x1="145" y1="70" x2="150" y2="65" />
        </>
      }

      {/* //default man */}
      {errors == 0 && (
        <>
          {/* <!-- Head --> */}
          <circle cx="140" cy="120" r="20" /> 
          {/* <!-- Body --> */}
          <line x1="140" y1="140" x2="140" y2="200" /> 
          {/* <!-- Arms --> */}
          <line x1="140" y1="160" x2="120" y2="190" />
          <line x1="140" y1="160" x2="160" y2="190" />
          {/* <!-- Legs --> */}
          <line x1="140" y1="200" x2="120" y2="230" />
          <line x1="140" y1="200" x2="160" y2="230" />
        </>
      )}

    </svg>
  )
}

export default Figure
