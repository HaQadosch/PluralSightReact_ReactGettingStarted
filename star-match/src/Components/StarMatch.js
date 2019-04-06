import React, { useState } from 'react'
import { utils } from '../Utils/utils'
import { PlayNumber } from './PlayNumber'
import { StarsDisplay } from './StarsDisplay'

export const StarMatch = () => {
  const [nbrStars, setNbrStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  const [candidateNums, setCandidateNums] = useState([])

  const candidatesAreWrong = nbrStars <= utils.sum(candidateNums)

  const numberStatus = number => {
    let status = 'available'
    if (!availableNums.includes(number)) {
      status = 'used'
    } else if (candidateNums.includes(number)) {
      status = candidatesAreWrong ? 'wrong' : 'candidate'
    }
    return status
  }

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          <StarsDisplay count={nbrStars} />
        </div>
        <div className='right'>
          {utils.range(1, 9).map(btnId => <PlayNumber key={btnId} btnId={btnId} status={numberStatus(btnId)} />)}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  )
}
