import React, { useState } from 'react';
import './App.css';
import Game2 from './cards/Game2';
import Game1 from './drawing/Game1';

enum Page {MAIN, DRAWING_GAME, CARD_GAME};

function App() {
  const [selectedGame, setSelectedGame] = useState(Page.MAIN);
  switch (selectedGame) {
    case Page.MAIN:
      return <MainPage selectGame={setSelectedGame} />;
    case Page.DRAWING_GAME:
      return <Game1 toMainPage={() => setSelectedGame(Page.MAIN)} />;
    case Page.CARD_GAME:
      return <Game2 toMainPage={() => setSelectedGame(Page.MAIN)} />;
  }
}

type MainPageProps = {
  selectGame: (page: Page) => void,
};

function MainPage(props: MainPageProps) {
  document.title = "游戏中心";
  return (
    <div className="App">
      <header className="App-header">
        <h1>游戏中心</h1>
        <div>
          <span>
            <button onClick={() => props.selectGame(Page.DRAWING_GAME)}>你画我猜</button>
          </span>
          {'  '}
          <span>
            <button onClick={() => props.selectGame(Page.CARD_GAME)}>升级</button>
            </span>
        </div>
      </header>
    </div>);
}

export default App;
