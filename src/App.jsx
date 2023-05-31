import { useState } from 'react'
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/FirstPages/LoginPage'
import RegisterPage from './Pages/FirstPages/RegisterPage'
import axios from 'axios'
import HabitPage from './Pages/HabitsPage/HabitPage'
import TodayPage from './Pages/HabitsPage/TodayPage'

function App() {

  axios.defaults.headers.common['Authorization'] = '2hWzO5hSANW5w7MslYJt2FIL';

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<LoginPage />}></Route>
          <Route path='/cadastro' element={<RegisterPage />}></Route>
          <Route path='/hoje' element={<TodayPage />}></Route>
          <Route path='/habitos' element={<HabitPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
