import React from 'react';

const InformationLayout = ({ currentTurn, winner }) => {
  return (
    <div className="status">
      {winner ? `Победитель: ${winner}` : `Текущий ход: ${currentTurn}`}
    </div>
  );
};

export default InformationLayout;
