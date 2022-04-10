import React from "react"
import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Gameboard />
    </div>
  )
}

export default App

