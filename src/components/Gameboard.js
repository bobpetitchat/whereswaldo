import React from "react"
import Characters from "./Characters"

const Gameboard = () => {
  const handleClickonCharacters = () => {
    console.log("got clicked on!")
  }
  return (
    <div>
      <Characters />
      <img className="click-image" style={{ width: "700px" }} src="/images/morehq.png" />
    </div>
  )
}

export default Gameboard