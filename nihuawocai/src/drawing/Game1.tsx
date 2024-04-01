import React from 'react';
import '../App.css';

type Game1Props = {
  toMainPage: () => void,
}

function Game1(props: Game1Props) {
  document.title = "你画我猜";
  
  return (
    <div className="App">
      <h1>你画我猜</h1>
      <div>{"<Game here>"}</div>
      <button onClick={props.toMainPage}>Back to main page</button>
    </div>
  );
}

export default Game1;
