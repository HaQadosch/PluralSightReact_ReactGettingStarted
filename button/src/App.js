import React, { useState } from 'react'
import './App.css'

const Button = ({ action, amount }) => {
  const handleClick = _ => action(amount)
  return <button onClick={handleClick} > +{amount} </button>
}

const Display = ({ message }) => <div>{message}</div>

const App = props => {
  const [counter, setCounter] = useState(0)
  const incCounter = amount => setCounter(counter + amount)
  console.log(incCounter)

  return (
    <>
      <Button action={incCounter} amount={5} />
      <Button action={incCounter} amount={10} />
      <Button action={incCounter} amount={20} />
      <Button action={incCounter} amount={100} />
      <Display message={counter} />
    </>
  )
}

export default App
