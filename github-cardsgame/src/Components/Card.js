import React, { Component } from 'react'

export class Card extends Component {
  render () {
    return (
      <section className='h-card' >
        <figure>
          <img className='u-photo' src='https://placehold.it/75' alt='profile of name' />
          <figcaption className='p-name'>name</figcaption>
        </figure>
        <div>
          <p className='p-name'>Name</p>
          <p className='p-org'>Organisation</p>
        </div>
      </section>
    )
  }
}
