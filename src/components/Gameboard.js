/* eslint-disable */
import React, { useContext, useEffect, useState } from "react"
import Image from "./Image"
import Notiflix, { Notify } from "notiflix/build/notiflix-notify-aio"
import { TargetArraysContext } from "./context/TargetArraysContext"
import { UserContext } from "./context/UserContext"
import { addDoc, collection, getDoc } from "firebase/firestore"

const Gameboard = () => {
  const { minutes, seconds, info, setInfo } = useContext(UserContext)
  const { arrays, db } = useContext(TargetArraysContext)
  const [id, setID] = useState("")
  const [target, setTarget] = useState("")
  const [completedArr, setCompletedArr] = useState([])
  const formColRef = collection(db, "form")

  useEffect(() => {
    if (completedArr.length >= 3) {
      Notify.success("WELL DONE! You win")
      setInfo({
        ...info,
        time: minutes + seconds,
      })
      console.log(info)
    }
  }, [completedArr])

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






