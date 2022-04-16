/* eslint-disable */
import React, { useEffect, useState } from "react"
import Image from "./Image"
import Notiflix, {Notify} from "notiflix/build/notiflix-notify-aio"

const Gameboard = () => {
  const [id, setID] = useState("")
  const [target, setTarget] = useState("")

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

  let sleepyFish = [263, 264, 232, 233, 294, 295, 296, 231, 262]
  let smilingFish = [147, 148, 178, 179, 180, 209, 210, 211, 177, 146]
  let backwardsFish = [537, 567, 568, 569, 598, 599, 536, 535]
 
  useEffect(() => {
    if (target === "sleepyFish") {
      sleepyFish.includes((Number(id))) ? Notify.success("well done! you have found the sleepy fish") : Notify.info("Try again?")
    } else if (target === "smilingFish") {
      smilingFish.includes((Number(id))) ? Notify.success("well done! you have found the smiling fish!") : Notify.info("Try again?")
    } else if (target === "backwardsFish") {
      backwardsFish.includes((Number(id))) ? Notify.success("well done! you have found the fish going against current!") : Notify.info("Try again?")
    }
  }, [target])

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
      <Image handleGiveID={handleGiveID} handleGiveTarget={handleGiveTarget} />
    </div>
  )
}

export default Gameboard






