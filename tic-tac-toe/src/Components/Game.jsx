import React from 'react'
import '../Styles/gameStyles.css'
import Board from './Board'

export default function Game() {
  return (
    <>
        <div className='all-container'>
            Tic-Tac-Toe
            <Board/>
        </div>
    </>
  )
}
