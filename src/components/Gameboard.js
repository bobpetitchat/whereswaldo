import React, { useState } from "react"
import Grid from "./Grid"

const Gameboard = () => {
 
  const handleAlert = (id) => {
    alert(id)
  }

  return (
    <div className="gameBoard">
      <Grid handleAlert={handleAlert}/>
    <img style={{ width: "700px", height: "565px" }} src="/images/morehqfixed.png"/>
    </div>
  )
}

export default Gameboard

