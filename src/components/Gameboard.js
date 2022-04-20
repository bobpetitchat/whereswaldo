/* eslint-disable */
import React, { useContext, useEffect, useState } from "react"
import Image from "./Image"
import Notiflix, { Notify } from "notiflix/build/notiflix-notify-aio"
import { TargetArraysContext } from "./context/TargetArraysContext"

const Gameboard = () => {

  const { arrays } = useContext(TargetArraysContext)
  const [id, setID] = useState("")
  const [target, setTarget] = useState("")  
  const [completedArr, setCompletedArr] = useState([])  

  useEffect(() => {
    if (completedArr.length >= 3) {
      Notify.success("WELL DONE! You win")
    }
  })

  const callTheFish = (target) => {
    // fixing string format
    if (target === "smilingFish") {
      setCompletedArr([...completedArr, target])
      return "smiling fish!"
    } else if (target === "backwardsFish") {
      setCompletedArr([...completedArr, target])
      return "fish going against current!"
    } else if (target === "sleepyFish") {
      setCompletedArr([...completedArr, target])
      return "sleepy fish!"
    }
  }

  useEffect(() => {
    console.log(id)
    for (let i = 0; i < arrays.length; i++) {
      if (target === Object.entries(arrays[i])[0][0]) {
        Object.entries(arrays[i])[0][1].includes((Number(id))) ? Notify.success("well done! you have found the " + callTheFish(target)) : Notify.info("Try again?")
      }      
    }
  }, [target])
  

  const handleGiveID = (id) => {
    setID(id)
  }

  const handleGiveTarget = (target) => {
    setTarget(target)
  }

  Notiflix.Notify.init({
    width: "300px",
    position: "center-top",
    timeout: 2000,

    success: {
      background: "#fff",
      textColor: "#2DA9FA",
      notiflixIconColor: "#2DA9FA",
    },

    info: {
      background: "#e07015d7",
      textColor: "#fff",
      notiflixIconColor: "#fff",
    },
  });

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Image handleGiveID={handleGiveID} handleGiveTarget={handleGiveTarget} />
    </div>
  )
}

export default Gameboard






