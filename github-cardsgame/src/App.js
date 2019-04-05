import React, { Component } from 'react'
import './App.css'
import { CardList } from './Components/CardList'
import { Form } from './Components/Form'

const testData = [
  { name: 'Dan Abramov', avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4', company: '@facebook' },
  { name: 'Sophie Alpert', avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4', company: 'Humu' },
  { name: 'Sebastian Markbåge', avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4', company: 'Facebook' },
  { name: 'HaQadosch Berraka', avatar_url: 'https://avatars2.githubusercontent.com/u/176787?v=4', company: 'Nobilis' }
]
export class App extends Component {
  constructor () {
    super()
    this.state = {
      profiles: testData
    }
  }
  render () {
    return (<>
      <header>
        <h1>{this.props.title}</h1>
      </header>
      <main>
        <Form />
        <CardList profiles={this.state.profiles} />
      </main>
    </>)
  }
}
