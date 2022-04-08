/* eslint-disable */
import React, { useEffect, useState } from "react"
import Grid from "./Grid"
import useLeftClickMenu from "./hooks/useLeftClickMenu"
import Menu from "./Menu"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const notify = (text) => {
    toast(text, {
      closeOnClick: false,
      autoClose: 1500,
      closeButton: false,
      position: toast.POSITION.TOP_CENTER
    });
  }

  useEffect(() => {
  let sleepyFish = [254, 287, 288, 289, 322, 323]
  let smilingFish = [161, 162, 163, 195, 196, 197, 229, 230, 231]
  let backwardsFish = [655, 656, 657, 690, 691, 622, 621, 623, 689]  
    if (target === "sleepyFish") {
      sleepyFish.includes((Number(id))) ? notify("You have found the sleepy fish!") : notify("Try again")
    }
  if (target === "smilingFish") {
    smilingFish.includes((Number(id))) ? notify("You have found the smiling fish!") : notify("Try again")
  }
  if (target === "backwardsFish") {
    backwardsFish.includes((Number(id))) ? notify("You have found the fish going backwards!") : notify("Try again")
    }  
  }, [target])

  return (
    <div className="gameBoard">
      <ToastContainer limit={3} hideProgressBar style={{ width: "200px", color: "pink", textAlign:"center", fontSize:"13px", fontWeight:"700" }} />
      <Menu x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleGiveTarget={handleGiveTarget} />
      <Grid handleGiveID={handleGiveID} />
      <img style={{ width: "900px", height: "766px" }} src="/images/morehqfixed.png" />
      
    </div>
  )
}

export default Gameboard

  
 



