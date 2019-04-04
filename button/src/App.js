import React, { useState } from 'react'
import './App.css'

const Button = ({ action }) => {
  return <button onClick={action} > +1 </button>
}

const Display = ({ message }) => <div>{message}</div>

const App = props => {
  const [counter, setCounter] = useState(0)
  const incCounter = _ => setCounter(counter + 1)
  console.log(incCounter)

  return (
    <>
      <Button action={incCounter} />
      <Display message={counter} />
    </>
  )
}

export default App
