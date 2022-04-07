import React from "react"
import Grid from "./Grid"
import MenuClick from "./MenuClick"
import Menu from "./Menu"

const Gameboard = () => {
  const { x, y, showMenu, setShowMenu } = MenuClick()

  let sleepyFish = [254, 287, 288, 289, 322, 323]
  let smilingFish = [161, 162, 163, 195, 196, 197, 229, 230, 231]
  let backwardsFish = [655, 656, 657, 690, 691, 622]

  const takeIDtoCheckFunc = (numberId) => {
    console.log("take ID to check func!" + numberId)
    checkFunc(numberId)
  }

  const checkFunc = (numberId, id) => {
   }

  return (
    <div className="gameBoard">
      <Menu checkFunc={checkFunc} x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} />
      <Grid takeIDtoCheckFunc={takeIDtoCheckFunc} />
      <img style={{ width: "900px", height: "766px" }} src="/images/morehqfixed.png" />
    </div>
  )
}

export default Gameboard

