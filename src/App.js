import React, { useEffect } from 'react'
import { Footer, Navbar } from './components'
import { Route, Routes, useLocation } from 'react-router-dom'
import { About, Blog, Contact, Home, NotFound, Skills } from './pages'
import Experience from './pages/Experience'
import Projects from "./pages/Projects"
import ProjectDetail from './pages/ProjectDetail'
const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDetail/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
