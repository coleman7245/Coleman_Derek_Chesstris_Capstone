import { Routes, Route } from 'react-router-dom';

import './styles/App.css';

import HomePage from './components/HomePage.jsx';
import { GamePage } from './components/GamePage.jsx';
import RankingsPage from './components/RankingsPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import RulesPage from './components/RulesPage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='/rankings' element={<RankingsPage />} />
      <Route path='/rules' element={<RulesPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App
