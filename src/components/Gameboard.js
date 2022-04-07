import React, { useState } from "react"
import Grid from "./Grid"


const Gameboard = () => {
 
  return (
    <div className="gameBoard">
      <Grid />
      <img style={{ width: "700px", height: "565px" }} src="/images/morehqfixed.png" />
    </div>
  )
}

export default Gameboard

