import React from "react"
import { Link } from "react-router-dom"

const LeaderboardButton = () => {
  const buttonStyle = {
    outline: 0,
    cursor: "pointer",
    color: "#EE2923",
    backgroundColor: "#fff",
    fontWeight: 800,
    fontSize: "18px",
    height: "auto",
    width: "70px",
    border: "none",
    textDecoration: "none"
  }
  
  return (
    <Link to="/leaderboard" style={buttonStyle}>Leaderboard</Link>
  )
} 

export default LeaderboardButton
