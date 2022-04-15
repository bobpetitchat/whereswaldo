import React from "react"
import Header from "./Header"
import StopWatch from "./StopWatch"
import Leaderboard from "./Leaderboard"

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#fff", margin: 0, maxWidth: "1300px", padding: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "55px", width: "800px"}}>
      <Header />
      <StopWatch />
      <Leaderboard />
    </div>
  )
}

export default Navbar
