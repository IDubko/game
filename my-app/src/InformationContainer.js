import React from 'react';
import InformationLayout from './InformationLayout';

const InformationContainer = ({ isXNext, winner }) => {
  return (
    <InformationLayout
      currentTurn={isXNext ? 'X' : 'O'}
      winner={winner}
    />
  );
};

export default InformationContainer;
