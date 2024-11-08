import React, { useState } from 'react';
import FieldLayout from './FieldLayout';
import InformationLayout from './InformationLayout';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const handleCellClick = (index) => {
    if (field[index] || isGameEnded) return; // Если ячейка занята или игра окончена

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    checkForWinner(newField);
  };

  const checkForWinner = (newField) => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;

      if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
        setIsGameEnded(true);
        return; // Победитель найден
      }
    }

    if (newField.every(cell => cell)) { // Если нет пустых ячеек
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X'); // Смена игрока
    }
  };

  const resetGame = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <div>
      <FieldLayout field={field} onCellClick={handleCellClick} />
      <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
      <button onClick={resetGame}>Начать заново</button>
    </div>
  );
};

// Обновленный компонент FieldLayout
    const FieldLayout = ({ field, onCellClick }) => {
  return (
    <div className="field">
      {field.map((cell, index) => (
        <div key={index} className="cell" onClick={() => onCellClick(index)}>
          {cell}
        </div>
      ))}
    </div>
  );
};

// Компонент InformationLayout остаётся без изменений
    const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
  let status;

  if (isDraw) {
    status = 'Ничья';
  } else if (isGameEnded) {
    status = `Победа: ${currentPlayer}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <div className="status">{status}</div>;
};

export default Game;
