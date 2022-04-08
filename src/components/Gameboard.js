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

  const handleGiveID = (id) => {
    console.log("the id is " + id)
    return id
  }

  const handleGiveTarget = (target) => {
    console.log("the target is " + target)
    return target
  }

  const handleFirstOperation = () => {
    // we will get the id here and check if it belongs to any fish
    if (sleepyFish.includes(Number(handleGiveID())) === true) return "sleepyFish"
    if (smilingFish.includes(Number(handleGiveID())) === true) return "smilingFish"
    if (backwardsFish.includes(Number(handleGiveID())) === true) return "backwardsFish"
    else return "no target"
  }

  const handleSecondOperation = () => {
  }


  return (
    <div className="gameBoard">
      <Menu x={x} handleSecondOperation={handleSecondOperation} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleGiveTarget={handleGiveTarget} />
      <Grid handleGiveID={handleGiveID} />
      <img style={{ width: "900px", height: "766px" }} src="/images/morehqfixed.png" />
    </div>
  )
}

export default Gameboard

