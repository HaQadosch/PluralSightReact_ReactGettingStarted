import React, { useState } from 'react'
import { StarMatch } from './Components/StarMatch'
import './App.css'

export default function App () {
  const [gameId, setGameId] = useState(1)

  return (
    <StarMatch key={gameId} reset={_ => setGameId(gameId + 1)} />
  )
}
