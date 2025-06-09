import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Singup from './components/Singup'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/signup' element={<Singup />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;
