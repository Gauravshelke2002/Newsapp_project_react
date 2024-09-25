import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { News } from './components/News'

const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <News category={category}/>
    </div>
  )
}

export default App
