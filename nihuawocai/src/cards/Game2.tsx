import React from 'react';
import '../App.css';

type Game2Props = {
  toMainPage: () => void,
}

function Game2(props: Game2Props) {
  document.title = "升级";

  return (
    <div className="App">
      <div>{"<Game here>"}</div>
      <button onClick={props.toMainPage}>Back to main page</button>
    </div>
  );
}

export default Game2;
