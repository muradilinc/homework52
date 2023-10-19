import Card from './Card.ts';

class CardDeck {
  cards: Card[];

  Suit: {
    diams: string,
    hearts: string,
    clubs: string,
    spades: string,
  };

  constructor() {
    this.cards = [];

    this.Suit = {
      diams: 'diams',
      hearts: 'hearts',
      clubs: 'clubs',
      spades: 'spades',
    };

    const rank: (number | string)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];

    const Colada = () => {
      for (let i = 0; i < rank.length; i++) {
        for (const key in this.Suit) {
          const card = new Card(rank[i], key as keyof typeof this.Suit);
          this.cards.push(card);
        }
      }
    };

    Colada();
  }

  getCard(): Card[] {
    const random: number = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(random, 1);
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard()[0];
      cards.push(card);
    }
    return cards;
  }
}

export default CardDeck;