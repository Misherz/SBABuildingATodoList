import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddButton from './components/Add'
import CheckBox from './components/CheckBox'
import { getData } from './data.mjs'

function App() {
  getData()

  return (
    <>
    <Header />
    <AddButton />
    <CheckBox />
    </>
  )
}

export default App
