import Card from './Card.ts';

class PokerHands {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutCome(): string {
    let result: string = '';
    let rankResult: number = 0;
    let suitResult: number = 0;

    for (let i = 0; i < this.cards.length; i++) {
      for (let j = i + 1; j < this.cards.length; j++) {
        if (this.cards[i].rank === this.cards[j].rank) {
          rankResult++;
        }
        if (this.cards[i].suit === this.cards[j].suit) {
          suitResult++;
        }
      }
    }

    if (rankResult === 0) {
      result = 'Ничего';
    }
    if (rankResult === 1) {
      result = 'Пара';
    }
    if (rankResult === 2) {
      result = 'Две пары';
    }
    if (rankResult === 3) {
      result = 'Тройка';
    }
    if (rankResult === 4) {
      result = 'Фул хаус';
    }
    if (rankResult === 6) {
      result = 'Карэ';
    }
    if (suitResult === 10) {
      result = 'Флеш';
    }

    return result;
  }
}

export default PokerHands;