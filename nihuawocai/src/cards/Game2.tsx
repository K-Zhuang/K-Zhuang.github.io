import React, { useEffect, useState } from 'react';
import '../App.css';
import { Deck, Hand } from './Game2Entities';

type Game2Props = {
  toMainPage: () => void,
}

function Game2(props: Game2Props) {
  useEffect(() => { document.title = "升级" }, []);

  // state used for triggering rerenders
  const [hack, setHack] = useState(0);

  const [deck, _setDeck] = useState(new Deck(2));

  const [hands, _setHands] = useState([new Hand(), new Hand(), new Hand(), new Hand()]);

  return (
    <div className="App">
      <div>{"<Game here>"}</div>
      <button onClick={props.toMainPage}>Back to main page</button>
      <button 
        onClick={() => {
          const dealPhase = setInterval(
            () => {
              if (deck.isDeckEmpty()) {
                clearInterval(dealPhase);
              }
              hands.forEach(hand => {
                const card = deck.dealCard();
                card != null && hand.addCardToHand(card);
              });
              setHack(hack+1);
            }, 
            1000,
          ); 
        }}>
        Deal!
      </button>
      <button
        onClick={() => {
          hands.forEach(hand => {
            const card = deck.dealCard();
            card != null && hand.addCardToHand(card);
          });
          setHack(hack+1);
        }}>
        Deal one round!
      </button>
      <div>{deck.cards.map(c => c.asString()).join(', ')}</div>
      {hands.map(hand => {
        return <div>Hand: {Array.from(hand.cards.values()).map(l => l.map(c => c.asString())).join(', ')}</div>;
      })}
    </div>
  );
}

export default Game2;
