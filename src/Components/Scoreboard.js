import React from 'react'
import '../Styles/Scoreboard.css'

export default function Scoreboard(props) {

    return (
    <div className='text-right'>
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highscore}</p>
    </div>
    )
    
}


