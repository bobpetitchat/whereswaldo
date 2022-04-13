import React from "react"
import PlayButton from "./PlayButton"
import StopWatch from "./StopWatch"

const NavbarAction = () => {
  return (
    <div style={{width: "150px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <StopWatch />
      <PlayButton />
    </div>
  )
}

export default NavbarAction