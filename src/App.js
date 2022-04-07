import React from "react"
import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import useRightClickMenu from "./components/useRightClickMenu"
import Menu from "./components/Menu"

const App = () => {
  const { x, y, showMenu } = useRightClickMenu()

  return (
    <div>
      <h1>yay</h1>
      <Menu x={x} y={y} showMenu={showMenu} />
      {/* <Header />
      <Gameboard /> */}
    </div>
  )
  }

export default App
