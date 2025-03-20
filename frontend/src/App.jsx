import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/HomePage.jsx';
import { GamePage } from './pages/game/GamePage.jsx';
import RankingsPage from './pages/rankings/RankingsPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import RulesPage from './pages/rules/RulesPage.jsx';
import ResultPage from './pages/result/ResultPage.jsx';
import EditPage from './pages/edit/EditPage.jsx';

function App() {

  return (
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
  )
}

export default App
