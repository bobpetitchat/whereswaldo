/* eslint-disable */

import React, { useEffect } from "react"
import Grid from "./Grid"
import useLeftClickMenu from "./hooks/useLeftClickMenu"
import Menu from "./Menu"

const Gameboard = () => {
  const { x, y, showMenu, setShowMenu } = useLeftClickMenu()

  let sleepyFish = [254, 287, 288, 289, 322, 323]
  let smilingFish = [161, 162, 163, 195, 196, 197, 229, 230, 231]
  let backwardsFish = [655, 656, 657, 690, 691, 622]

  const handleFirstOperation = (id) => {
    if (!id) return
    if (id)
    return id
  }

  const handleSecondOperation = (target) => {
    return target
  }

  const handleThirdOperation = (id, target) => {
    handleFirstOperation()
    handleSecondOperation()
  }

  return (
    <div className="gameBoard" onClick={handleThirdOperation}>
      <Menu x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleSecondOperation={handleSecondOperation} />
      <Grid handleThirdOperation={handleThirdOperation} />
      <img style={{ width: "900px", height: "766px" }} src="/images/morehqfixed.png" />
    </div>
  )
}

export default Gameboard

