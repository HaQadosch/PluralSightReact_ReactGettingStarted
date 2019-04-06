import React from 'react'

export const PlayAgain = ({ onClick: reset, gameStatus }) => {
  return (
    <div className='game-done'>
      <div className='message' style={{ color: gameStatus === 'won' ? 'green' : 'red' }} >{gameStatus === 'won' ? 'Nice' : 'Oups'}</div>
      <button onClick={reset} >Play again</button>
    </div>
  )
}
