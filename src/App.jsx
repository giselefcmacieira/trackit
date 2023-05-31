import { useState } from 'react'
import ResetStyle from './styles/ResetStyle'
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import axios from 'axios'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
