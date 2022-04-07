import React from "react"
import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import useRightClickMenu from "./components/useRightClickMenu"
import Menu from "./components/Menu"

const App = () => {
  const { x, y, showMenu } = useRightClickMenu()

  return (
    <div>
      <Menu x={x} y={y} showMenu={showMenu} />
      <Header />
      <Gameboard />
    </div>
  )
  }

export default App
