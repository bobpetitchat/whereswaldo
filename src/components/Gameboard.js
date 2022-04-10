/* eslint-disable */
import React, { useEffect, useState } from "react"
import Grid from "./Grid"
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
    width: "280px",
    position: "center-center",
    distance: "10px",
    opacity: 1,
    borderRadius: "5px",
    rtl: false,
    timeout: 2000,
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: false,
    
    ID: "NotiflixNotify",
    className: "notiflix-notify",
    zindex: 4001,
    fontFamily: "Quicksand",
    fontSize: "13px",
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: "fade", // "fade" - "zoom" - "from-right" - "from-top" - "from-bottom" - "from-left"
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: "basic", // "basic" - "shadow"
    fontAwesomeIconSize: "34px",
  
    success: {
      background: "#fff",
      textColor: "#2DA9FA",
      childClassName: "notiflix-notify-success",
      notiflixIconColor: "#2DA9FA",
      fontAwesomeClassName: "fas fa-check-circle",
      backOverlayColor: "rgba(50,198,130,0.2)",
    },
  
    info: {
      background: "#FB6856",
      textColor: "#fff",
      childClassName: "notiflix-notify-info",
      notiflixIconColor: "#fff",
      fontAwesomeClassName: "fas fa-info-circle",
      backOverlayColor: "rgba(38,192,211,0.2)",
    },
  });

  let sleepyFish = [263, 264, 232, 233, 294, 295, 296, 231, 262]
  let smilingFish = [147, 148, 178, 179, 180, 209, 210, 211, 177]
  let backwardsFish = [537, 567, 568, 569, 598, 599, 536, 535]

  useEffect(() => {
    console.log(target, id)
    if (target === "sleepyFish") {
      sleepyFish.includes((Number(id))) ? Notify.success("well done! you have found the sleepy fish") : Notify.info("Try again?")
    } else if (target === "smilingFish") {
      smilingFish.includes((Number(id))) ? Notify.success("well done! you have found the smiling fish!") : Notify.info("Try again?")
    } else if (target === "backwardsFish") {
      backwardsFish.includes((Number(id))) ? Notify.success("well done! you have found the fish going against current!") : Notify.info("Try again?")
    }
  }, [target])

  return (
    <div className="gameBoard">
      <Grid handleGiveID={handleGiveID} />
      <Image handleGiveTarget={handleGiveTarget} />
    </div>
  )
}

export default Gameboard






