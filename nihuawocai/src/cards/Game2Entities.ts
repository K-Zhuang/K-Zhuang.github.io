export enum Suit {
    JOKER,
    SPADE,
    HEART,
    CLUB,
    DIAMOND,
}

export const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
export type Value = typeof values[number];

export class Card {
    suit: Suit;
    value: Value;

    constructor(suit: Suit, value: Value) {
        this.suit = suit;
        this.value = value;
    }

    asString() {
        switch (this.suit) {
            case Suit.JOKER:
                if (this.value == 1) {
                    return "小王";
                }
                return "大王";
            case Suit.SPADE:
                return this.value+"S";
            case Suit.HEART:
                return this.value+"H";
            case Suit.CLUB:
                return this.value+"C";
            case Suit.DIAMOND:
                return this.value+"D";
        }
    }
}

export class Deck {
    cards: Card[];
    constructor(numDecks: number) {
        this.cards = [];
        for (let i = 0; i < numDecks; i++) {
            this.cards.push(...Deck.oneDeckOfCards());
        }

        // Shuffle using Durstenfeld Shuffle
        for (var i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    isDeckEmpty() {
        return this.cards.length === 0;
    }

    dealCard() {
        return this.cards.pop();
    }

    static oneDeckOfCards(): Card[] {
        var cards = [];
        // Numbered cards
        values.forEach(value => {
            cards.push(
                new Card(Suit.SPADE, value), 
                new Card(Suit.HEART, value), 
                new Card(Suit.CLUB, value), 
                new Card(Suit.DIAMOND, value)
            );
        });

        // Jokers
        cards.push(new Card(Suit.JOKER, 1));
        cards.push(new Card(Suit.JOKER, 2));
        return cards;
    }
}

export class Hand {
    cards: Map<Suit, Card[]>;

    constructor() {
        this.cards = new Map();
    }

    addCardToHand(card: Card) {
        let s = this.cards.get(card.suit) ?? [];
        s.push(card);
        this.cards.set(card.suit, s.sort((c1, c2) => c1.value - c2.value));
    }
}

// export class Player {
//     points: number = 0;
//     hand: Hand = [];
// }

export class DrawPhaseEnvironment {
    
}


export class PlayedHand {

}

export class PlayPhaseEnvironment {

}