import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import Open from './auth/Open'

const App = () => {
  return (
  <>
    <Routes>
      <Route path='/' Component={Login} />
      <Route path='/open' Component={Open} />
    </Routes>
  </>
  )
}

export default App