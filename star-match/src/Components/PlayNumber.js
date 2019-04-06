import React from 'react'
import { colors } from '../Utils/utils'

export const PlayNumber = ({ btnId, status, onClick, ...props }) => <button className='number' style={{ background: colors[status] }} onClick={_ => onClick({ btnId, status })} >{btnId}</button>
