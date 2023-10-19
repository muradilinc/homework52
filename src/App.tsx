import React, {useState} from 'react';
import CardDeck from './lib/CardDeck.ts';
import Card from './components/Card/Card.tsx';
import PokerHands from './lib/PokerHands.ts';

interface ShowSuit  {
  diams: string,
  hearts: string,
  clubs: string,
  spades: string
}

interface Card {
  rank: string | number;
  suit: keyof ShowSuit;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const addCard = () => {
    const cards: Card[] = new CardDeck().getCards(5);
    setCards(cards);
  };

  const pokerHand = () => {
    return new PokerHands(cards).getOutCome();
  };

  return (
    <div>
      <button onClick={addCard}>click me</button>
      <p>{pokerHand()}</p>
      <div className='playingCards faceImages'>
        {
          cards?.map((card, index) => {
            return (
              <Card key={index} rank={card.rank} suit={card.suit}/>
            );
          })
        }
      </div>
    </div>
  );
};

export default App;