import React from "react"

const PlayButton = ({ start, pause, isRunning }) => {  

  const buttonStyle = {
    outline: 0,
    cursor: "pointer",
    color: "#EE2923",
    backgroundColor: "#fff",
    fontWeight: 800,
    fontSize: "18px",
    height: "auto",
    width: "70px",
    border: "none"
  }
  
  if (isRunning) {
    return <button className="playButton" onClick={pause} style={buttonStyle}>Pause</button>
  } else {
    return <button className="playButton" onClick={start} style={buttonStyle}>Play</button> 
  }
}

export default PlayButton
