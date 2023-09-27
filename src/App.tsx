import { useState } from 'react'
import  Header  from "./components/common/Header/Header"
import MainSectionContainer from './components/common/MainSectionContainer/MainSectionContainer'

import './App.css'


const App = () => {

  return (
    <div className="App">
      <Header />
      <MainSectionContainer />
    </div>
  )
}

export default App
