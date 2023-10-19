interface ShowSuit  {
  diams: string,
  hearts: string,
  clubs: string,
  spades: string
}

class Card {
  rank: number | string;
  suit: keyof ShowSuit;

  constructor(rank: number | string, suit: keyof ShowSuit) {
    this.rank = rank;
    this.suit = suit;
  }
}

export default Card;