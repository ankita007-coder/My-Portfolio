import React from 'react'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Services, Work } from './pages'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
