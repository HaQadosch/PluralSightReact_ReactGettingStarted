import React from 'react'

export const PlayAgain = ({ onClick: reset }) => {
  return (
    <div className='game-done'>
      <button onClick={reset} >Play again</button>
    </div>
  )
}
