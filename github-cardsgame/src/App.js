import React, { Component } from 'react'
import './App.css'
import { Card } from './Components/Card'

export class App extends Component {
  render () {
    return (<>
      <header>
        <h1>{this.props.title}</h1>
      </header>
      <main>
        <Card />
      </main>
    </>)
  }
}
