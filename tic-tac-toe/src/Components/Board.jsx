import React, {useState} from 'react'
import '../Styles/Board.css';

const Square = (props) => {
    return (
        <button 
            className='square-container'
            onClick={props.onClickEvent}
            >
            {props.value}
        </button>
    );
}

//Board Component
export default function Board() {
    const initialSquares = Array(9).fill(null);
    const [squares, setSquares ] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares)
    const status = winner ? 
        `Winner: ${winner}` :
        `Next player: ${xIsNext ? 'X' : 'O'}`;

    const handleClickEvent = (i) => {
        const newSquares = [...squares];
        newSquares[i] = xIsNext ?'X' : '0';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }
    const renderSquare = (i) =>{
        return (
            <Square 
                value={squares[i]}
                onClickEvent={() => handleClickEvent(i)}
                />
        )
    }

        return (
        <>
            <div className='status'>{status}</div>
            <div className="board-container">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    )
}

//Function to calculate the tic-tac-toe winniner
function calculateWinner(squares){
    const lines = [
        [0,1,2],[3,4,5],[6,7,8], //Horizontal winning
        [0,3,6],[1,4,7],[2,5,8], //Vertical winning
        [0,4,8],[2,4,6] //Diagonal winning
    ];
    for (let line of lines){
        const [a,b,c] = line;
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
        return null;
    }
}