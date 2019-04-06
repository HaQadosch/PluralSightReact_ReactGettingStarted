import React, { Component } from 'react'
import '../Style/Card.css'
export class Card extends Component {
  render () {
    const { name, avatarURL, company } = this.props
    return (
      <section className='h-card' >
        <figure>
          <img className='u-photo' src={avatarURL} alt={`profile of ${name}`} />
          <figcaption className='p-name'>{name}</figcaption>
        </figure>
        <div>
          <p className='p-name'>{name}</p>
          <p className='p-org'>{company}</p>
        </div>
      </section>
    )
  }
}
