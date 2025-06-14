import { createContext, useContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/HomePage.jsx';
import GamePage from './pages/game/GamePage.jsx';
import RankingsPage from './pages/rankings/RankingsPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import RulesPage from './pages/rules/RulesPage.jsx';
import ResultPage from './pages/result/ResultPage.jsx';
import EditPage from './pages/edit/EditPage.jsx';

import {initialGameState, Game_Phase } from './utilities.js';

const GameContext = createContext();

function handleGameState(gameState, action) {
  let newGameState = {...gameState};

  async function postPlayer(player) {
      const data = {player};

      try {
          const player = await fetch('http://localhost:8080/api/players', 
              {
                  method : 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                      },
                  body : JSON.stringify(data)
              }
          );
      }
      catch(err) {
          console.log(err);
      }
  }

  async function putPlayer(player) {
    const data = {player};
    console.log(player);

    try {
        const player = await fetch(`http://localhost:8080/api/players/${player.name}`, 
            {
                method : 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                body : JSON.stringify(data)
            }
        );
    }
    catch(err) {
        console.log(err);
    }
}

  switch (action.type) {
      case 'ADD_NEW_PLAYER':
          postPlayer(action.player);
          newGameState.player_name = action.player.name;
          newGameState.startTime = Date.now();
          break;
      case 'EDIT_INPUT':
          putPlayer(action.player);
          newGameState.player_name = action.player;
          break;
      case 'UPDATE_TIME':
          newGameState.finishTime = getTime(newGameState.startTime);
          break;
      case 'RESET_GAME':
        newGameState.score = 0;
        newGameState.startTime = Date.now();
        newGameState.finishTime = getTime(newGameState.startTime);
      case 'CHANGE_SCORE':
          if (action.hasScored)
              newGameState.score += 1;
          newGameState.crossed_finish_line = action.crossedFinishLine;
          break;
      default:
          break;
  }

  newGameState.current_phase = checkGamePhase(gameState);
  return newGameState;
}

function checkGamePhase(gameState) {
  if (gameState.score <= gameState.win_state.win_score && gameState.crossed_finish_line)
      return Game_Phase.WON;
  else if (gameState.crossed_finish_line)
      return Game_Phase.LOST;
  else if (gameState.player_name)
      return Game_Phase.PLAYING;
  else
      return Game_Phase.NOT_RUNNING;
}

function getTime(startTime) {
  let currentTime = Date.now() - startTime;
  let seconds = currentTime / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;

  let gameTime = {
      seconds : (seconds >= 60) ? Math.floor(seconds - (Math.floor(minutes) * 60)) : Math.floor(seconds),
      minutes : (minutes >= 60) ? Math.floor(minutes - (Math.floor(hours) * 60)) : Math.floor(minutes),
      hours : Math.floor(hours)
  }

  return gameTime;
}

function App() {
  const [gameState, dispatch] = useReducer(handleGameState, initialGameState);

  return (
    <GameContext.Provider value={[gameState, dispatch]}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/rankings' element={<RankingsPage />} />
        <Route path='/rules' element={<RulesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/win' element={<ResultPage message='You win!' />} />
        <Route path='/lose' element={<ResultPage message='You lose!' />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </GameContext.Provider>
  )
}

export { App, GameContext };
