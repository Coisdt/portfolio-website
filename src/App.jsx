import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { navigationLinks } from './data'
import Carosel from './Components/Carosel'

function App() {
  return (
    <>
      <Navbar />
      <Carosel />
    </>
  )
}

export default App
