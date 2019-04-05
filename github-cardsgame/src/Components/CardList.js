import React from 'react'
import { Card } from './Card'
import '../Style/CardList.css'

const testData = [
  { name: 'Dan Abramov', avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4', company: '@facebook' },
  { name: 'Sophie Alpert', avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4', company: 'Humu' },
  { name: 'Sebastian Markbåge', avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4', company: 'Facebook' }
]

export const CardList = props => (
  <ul>
    {testData.map((profile, index) => <li key={index} ><Card profile={profile} /></li>)}
  </ul>
)
