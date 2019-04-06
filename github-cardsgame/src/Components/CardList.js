import React from 'react'
import { Card } from './Card'
import '../Style/CardList.css'

export const CardList = ({ profiles, ...props }) => {
  const users = []

  for (let user of profiles.values()) {
    users.push(user)
  }

  return (
    <ul>
      {/* id, avatarURL, name, company */}
      {users.map(({ id, ...profile }) => <li key={id} ><Card {...profile} /></li>)}
    </ul>
  )
}
