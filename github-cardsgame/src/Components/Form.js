import React, { Component } from 'react'
import '../Style/Form.css'

export class Form extends Component {
  render () {
    return (
      <form >
        <input type='text' placeHolder='GitHub username' />
        <button type='submit'>Add Card</button>
      </form>
    )
  }
}
