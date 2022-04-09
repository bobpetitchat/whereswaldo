/* eslint-disable */
import React, { useEffect, useState } from "react"
import Grid from "./Grid"
import useLeftClickMenu from "./hooks/useLeftClickMenu"
import Menu from "./Menu"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Gameboard = () => {
  const { x, y, showMenu, setShowMenu } = useLeftClickMenu()

  const [id, setID] = useState("")
  const [target, setTarget] = useState("")

  const handleGiveID = (id) => {
    setID(id)
  }

  const handleGiveTarget = (target) => {
    setTarget(target)
  }

  let sleepyFish = [263, 264, 232, 233, 294, 295, 296, 231, 262]
  let smilingFish = [147, 148, 178, 179, 180, 209, 210, 211, 177]
  let backwardsFish = [537, 567, 568, 569, 598, 599, 536, 535]

  useEffect(() => {
    console.log(target, id)
    if (target === "sleepyFish") {
      sleepyFish.includes((Number(id))) ? console.log("sleepy fish found.") : console.log("try again?")
    } else if (target === "smilingFish") {
      smilingFish.includes((Number(id))) ? console.log("smiling fish found.") : console.log("try again?")
    } else if (target === "backwardsFish") {
      backwardsFish.includes((Number(id))) ? console.log("fish going against current found.") : console.log("try again?")
    }
  }, [target])

  return (
    <div className="gameBoard">
      <Menu x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleGiveTarget={handleGiveTarget} />
      <Grid handleGiveID={handleGiveID} />
      <img style={{ width: "800px", height: "681px" }} src="/images/morehqfixed.png" />
    </div>
  )
}

export default Gameboard






