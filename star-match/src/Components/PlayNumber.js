import React from 'react'

export const PlayNumber = ({ btnId, ...props }) => <button className='number' onClick={_ => console.log({ btnId })} >{btnId}</button>
