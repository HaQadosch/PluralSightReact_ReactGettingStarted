import React, { useState, useEffect } from 'react'
import { utils } from '../Utils/utils'
import { PlayNumber } from './PlayNumber'
import { StarsDisplay } from './StarsDisplay'
import { PlayAgain } from './PlayAgain'

export const StarMatch = ({ reset }) => {
  const [nbrStars, setNbrStars] = useState(utils.random(1, 9))
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  const [candidateNums, setCandidateNums] = useState([])
  const [secondsLeft, setSecondsLeft] = useState(10)

  useEffect(_ => {
    if (secondsLeft <= 0 && 0 <= availableNums.length) return // eslint-disable-line
    const timeOutId = setTimeout(_ => {
      setSecondsLeft(secondsLeft - 1)
    }, 1000)
    return _ => clearTimeout(timeOutId)
  })

  const candidatesAreWrong = nbrStars <= utils.sum(candidateNums)
  const gameStatus = availableNums.length === 0
    ? 'won'
    : secondsLeft === 0
      ? 'lost'
      : 'active'

  const numberStatus = number => {
    let status = 'available'
    if (!availableNums.includes(number)) {
      status = 'used'
    } else if (candidateNums.includes(number)) {
      status = candidatesAreWrong ? 'wrong' : 'candidate'
    }
    return status
  }

  const onNumberClick = ({ btnId, status }) => {
    if (status !== 'used' && gameStatus === 'active') {
      const newCandidateNums = status === 'available'
        ? candidateNums.concat(btnId)
        : candidateNums.filter(btn => btn !== btnId)

      if (utils.sum(newCandidateNums) !== nbrStars) {
        setCandidateNums(newCandidateNums)
      } else {
        const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n))
        setNbrStars(utils.randomSumIn(newAvailableNums, 9))
        setAvailableNums(newAvailableNums)
        setCandidateNums([])
      }
    }
  }

  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          {gameStatus !== 'active' ? <PlayAgain onClick={reset} gameStatus={gameStatus} /> : <StarsDisplay count={nbrStars} />}
        </div>
        <div className='right'>
          {utils.range(1, 9).map(btnId => <PlayNumber key={btnId} btnId={btnId} status={numberStatus(btnId)} onClick={onNumberClick} />)}
        </div>
      </div>
      <div className='timer'>Time Remaining: {secondsLeft}</div>
    </div>
  )
}
