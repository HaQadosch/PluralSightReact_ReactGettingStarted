import React from 'react'
import { Card } from './Card'
import '../Style/CardList.css'

export const CardList = ({ profiles, ...props }) => (
  <ul>
    {profiles.map((profile, index) => <li key={index} ><Card {...profile} /></li>)}
  </ul>
)
