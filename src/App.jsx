import { useState } from 'react'
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/FirstPages/LoginPage'
import RegisterPage from './Pages/FirstPages/RegisterPage'
import axios from 'axios'
import HabitPage from './Pages/HabitsPage/HabitPage'
import TodayPage from './Pages/HabitsPage/TodayPage'
import { infProfile } from './constants/Context'
import HistoricPage from './Pages/HabitsPage/HistoricPage'

function App() {

  axios.defaults.headers.common['Authorization'] = '2hWzO5hSANW5w7MslYJt2FIL';

  const [infProf, setInfProf] = useState('');

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <infProfile.Provider value={[infProf, setInfProf]}>
        <BrowserRouter>
          <Routes>
              <Route path = '/' element={<LoginPage />}></Route>
              <Route path='/cadastro' element={<RegisterPage />}></Route>
              <Route path='/hoje' element={<TodayPage />}></Route>
              <Route path='/habitos' element={<HabitPage />}></Route>
              <Route path='/historico' element={<HistoricPage />}></Route>
          </Routes>
        </BrowserRouter>
      </infProfile.Provider>
    </>
  )
}

export default App
