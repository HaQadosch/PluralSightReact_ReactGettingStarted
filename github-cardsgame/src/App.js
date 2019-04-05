import React, { Component } from 'react'
import './App.css'
import { CardList } from './Components/CardList'

export class App extends Component {
  render () {
    return (<>
      <header>
        <h1>{this.props.title}</h1>
      </header>
      <main>
        <CardList />
      </main>
    </>)
  }
}
