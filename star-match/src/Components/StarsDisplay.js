import React from 'react'
import { utils } from '../Utils/utils'

export const StarsDisplay = ({ count, ...props }) => {
  return (
    <>
      {utils.range(1, count).map(stardId => <div key={stardId} className='star' />)}
    </>
  )
}
