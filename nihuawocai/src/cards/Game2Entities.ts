enum Suit {
    JOKER,
    SPADE,
    HEART,
    CLUB,
    DIAMOND,
}

type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export class Card {
    suit: Suit;
    value: Value;

    constructor(suit: Suit, value: Value) {
        this.suit = suit;
        this.value = value;
    }
}

export class Deck {
    cards: Array<Card>;
    constructor(numDecks: number) {
        this.cards = [new Card(Suit.SPADE, 1)]
    }
}

export class Hand {
    cards: $ReadOnlyMap<Suit, Value>;

    constructor() {
        this.cards;
    }
}

export class Player {
    points: number = 0;
    hand: Hand = [];
}

export class Team {

}

export class PlayedHand {

}

export class GameEnvironment {
    trump: Suit;
    deck: ReadonlyArray<Card>;

    constructor(trump: Suit) {
        this.trump = trump;
        // 
        this.deck = ;
    }
}