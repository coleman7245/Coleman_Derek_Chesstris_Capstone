import {Routes, Route} from 'react-router-dom';

import './styles/App.css';

import HomePage from './components/HomePage.jsx';
import Board from './components/Board.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Game' element={<Board />} />
    </Routes>
  )
}

export default App
