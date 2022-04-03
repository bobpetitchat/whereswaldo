import React from "react"
import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import GetMousePosition from "./components/GetMousePosition"
function App() {
 
  return (
    <div>
      <Header />
      <Gameboard />
      <GetMousePosition />
    </div>
  )
  }

export default App
