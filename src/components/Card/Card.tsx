import React from 'react';

interface CardProps {
  rank: number | string;
  suit: keyof ShowSuit;
}

interface ShowSuit  {
  diams: string,
  hearts: string,
  clubs: string,
  spades: string
}

const Card: React.FC<CardProps> = ({rank, suit}) => {

  const showSuit: ShowSuit = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
  };

  return (
        <>
            <span className={`card rank-${rank} ${suit}`}>
                <span className="rank">{rank}</span>
                <span className="suit">{suit ? showSuit[suit] : suit}</span>
            </span>
        </>
    );
};
export default Card;