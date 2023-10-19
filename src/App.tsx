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
    <div className='text-center mt-20'>
      <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5' onClick={addCard}>Get new cards</button>
      <p className='text-5xl mb-7 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{pokerHand()}</p>
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