import { useState } from 'react'
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/FirstPages/LoginPage'
import RegisterPage from './Pages/FirstPages/RegisterPage'
import axios from 'axios'
import HabitPage from './Pages/SecondaryPages/HabitPage'
import TodayPage from './Pages/SecondaryPages/TodayPage'
import { infProfile } from './constants/Context'
import HistoricPage from './Pages/SecondaryPages/HistoricPage'
import { percent } from './constants/Context'
import { TodayHab } from './constants/Context'

function App() {

  axios.defaults.headers.common['Authorization'] = '2hWzO5hSANW5w7MslYJt2FIL';

  const [infProf, setInfProf] = useState('');

  const [progresso, setProgresso] = useState(0);

  const [TodayHabits, setTodayHabits] = useState([]);

  const [fezLogin, setFezLogin] = useState(false);

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <TodayHab.Provider value={[TodayHabits, setTodayHabits]}>
      <percent.Provider value={[progresso, setProgresso]}>
      <infProfile.Provider value={[infProf, setInfProf]}>
        <BrowserRouter>
          <Routes>
              <Route path = '/' element={<LoginPage fezLogin={fezLogin} setFezLogin={setFezLogin}/>}></Route>
              <Route path='/cadastro' element={<RegisterPage />}></Route>
              <Route path='/hoje' element={<TodayPage fezLogin={fezLogin} setFezLogin={setFezLogin}/>}></Route>
              <Route path='/habitos' element={<HabitPage />}></Route>
              <Route path='/historico' element={<HistoricPage />}></Route>
          </Routes>
        </BrowserRouter>
      </infProfile.Provider>
      </percent.Provider>
      </TodayHab.Provider>
    </>
  )
}

export default App
