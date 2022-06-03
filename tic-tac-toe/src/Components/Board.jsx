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
    // X winner horizontaly
    if((squares[0] === 'X' && squares[1] === 'X' && squares[2] === 'X') || (squares[3] === 'X' && squares[4] === 'X' && squares[5] === 'X') || (squares[6] === 'X' && squares[7] === 'X' && squares[8] === 'X')){
        console.log('nice')
        return 'X';
    }
    // O winner horizontaly
    else if((squares[0] === 'O' && squares[1] === 'O' && squares[2] === 'O') || (squares[3] === 'O' && squares[4] === 'O' && squares[5] === 'O') || (squares[6] === 'O' && squares[7] === 'O' && squares[8] === 'O')){
        console.log('nice')
        return 'O';
    }
    // X winner vertical
    else if((squares[0] === 'X' && squares[3] === 'X' && squares[6] === 'X') || (squares[1] === 'X' && squares[4] === 'X' && squares[7] === 'X') || (squares[2] === 'X' && squares[5] === 'X' && squares[8] === 'X')){
        console.log('nice')
        return 'X';
    }
    // X winner diagonal
    else if((squares[0] === 'X' && squares[4] === 'X' && squares[8] === 'X') || (squares[2] === 'X' && squares[4] === 'X' && squares[6] === 'X')){
        console.log('nice')
        return 'X';
    }
    
    // O winner vertical
    else if((squares[0] === 'O' && squares[3] === 'O' && squares[6] === 'O') || (squares[1] === 'O' && squares[4] === 'O' && squares[7] === 'O') || (squares[2] === 'O' && squares[5] === 'O' && squares[8] === 'O')){
        console.log('nice')
        return 'O';
    }
    // O winner diagonal
    else if((squares[0] === 'O' && squares[4] === 'O' && squares[8] === 'O') || (squares[2] === 'O' && squares[4] === 'O' && squares[6] === 'O')){
        console.log('nice')
        return 'O';
    }
}