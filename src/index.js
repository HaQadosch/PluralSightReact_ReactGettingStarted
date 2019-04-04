import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const Button = props => {
  const [counter, setCounter] = useState(0)
  const incCounter = _ => setCounter(counter + 1)
  return <button onClick={incCounter}>{counter}</button>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Button />, rootElement)
