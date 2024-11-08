import React, { useState } from 'react';
import FieldLayout from './FieldLayout';

const FieldContainer = ({ isXNext, handleClick }) => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleSquareClick = (index) => {
    if (board[index]) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    handleClick(newBoard);
  };

  return <FieldLayout board={board} onSquareClick={handleSquareClick} />;
};

export default FieldContainer;
