import React from 'react'
import { colors } from '../Utils/utils'

export const PlayNumber = ({ btnId, status, ...props }) => <button className='number' style={{ background: colors[status] }} onClick={_ => console.log({ btnId })} >{btnId}</button>
