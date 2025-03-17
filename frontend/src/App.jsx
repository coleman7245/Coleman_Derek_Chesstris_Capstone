import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/HomePage.jsx';
import { GamePage } from './pages/game/GamePage.jsx';
import RankingsPage from './pages/rankings/RankingsPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import RulesPage from './pages/rules/RulesPage.jsx';
import LosePage from './pages/lose/LosePage.jsx';
import WinPage from './pages/win/WinPage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='/rankings' element={<RankingsPage />} />
      <Route path='/rules' element={<RulesPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/lose' element={<LosePage />} />
      <Route path='/win' element={<WinPage />} />
    </Routes>
  )
}

export default App
