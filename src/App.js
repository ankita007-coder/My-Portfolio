import React from 'react'
import { Footer, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, Pricing, Services, Work } from './pages'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
