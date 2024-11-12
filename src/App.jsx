import React from 'react'
import './App.css'
import Header from './components/Header'
import AddButton from './controller/AddTask'
import { getData } from './data.mjs'

function App() {
  getData()

  return (
    <>
    <Header />
    <AddButton />
    </>
  )
}

export default App
