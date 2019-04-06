import React, { Component } from 'react'
import '../Style/Form.css'

export class Form extends Component {
  constructor () {
    super()

    this.state = {
      userName: ''
    }

    this.handleSubmit = evt => {
      evt.preventDefault()
      console.log({ val: this.state.userName })
      this.get(this.state.userName)
      this.setState({ userName: '' })
    }

    this.handleChange = ({ currentTarget: { value: userName } }) => {
      this.setState({ userName })
    }
  }

  async get (req) {
    const fetched = await window.fetch(`https://api.github.com/users/${req}`)
    const { ok, id, avatar_url: avatarURL, name, company, ...parsed } = await fetched.json()
    console.log({ fetched, id, avatarURL, name, company, parsed })
    if (!fetched.ok) {
      throw new Error('fetch returned with not ok status.')
    }
    this.props.action({ id, avatarURL, name, company })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type='text' placeholder='GitHub username' required onChange={this.handleChange} value={this.state.userName} autoFocus />
        <button type='submit'>Add Card</button>
      </form>
    )
  }
}
