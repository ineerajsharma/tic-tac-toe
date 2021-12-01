import React from 'react';

const statusMessage = ({ winner, current }) => {
  //   const message = winner
  //   ? `winner is ${winner}`
  //   : `Next player is ${current.isXNext ? 'X' : '0'}`;

  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'Match Tie'}
    </h2>
  );
};

export default statusMessage;
