import React from 'react';

const FieldLayout = ({ board, onSquareClick }) => {
  const renderSquare = (index) => (
    <button className="square" onClick={() => onSquareClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default FieldLayout;
