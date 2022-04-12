import React from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import MyModal from "./components/MyModal"

const App = () => {
  return (
    <div className="App">
            <MyModal />

      <Navbar />
      <Gameboard />
    </div>
  )
}

export default App

