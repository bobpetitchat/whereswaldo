import React from "react"
import Header from "./Header"
import NavbarAction from "./NavbarAction"
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#fff", margin: 0, width: "1400px", padding: 0, display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems: "center", height: "55px", width: "800px"}}>
      <Header/>
      <NavbarAction />
    </div>
  )
}

export default Navbar
