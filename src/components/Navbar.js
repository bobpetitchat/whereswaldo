import React from "react"
import StopWatch from "./StopWatch"
import Header from "./Header"
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#fff", margin: 0, width: "1400px", padding: 0, display: "flex", flexDirection: "row", justifyContent:"space-evenly", alignItems: "center", height: "55px", width: "800px"}}>
      <Header />
      <StopWatch />
    </div>
  )
}

export default Navbar
