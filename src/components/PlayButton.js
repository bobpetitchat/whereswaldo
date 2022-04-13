import React from "react"

const PlayButton = ({ start, pause, isRunning }) => {  

  if (isRunning) {
    return <button className="playButton" onClick={pause} style={{
      outline: 0, cursor: "pointer", borderRadius: "6px", border: "2px solid #ff4742", color: "#fff", backgroundColor: "#ff4742", padding: "8px", fontWeight: 800, height: "auto", width: "70px"}}>Pause</button>
  } else {
    return <button className="playButton" onClick={start} style={{
      outline: 0, cursor: "pointer", borderRadius: "6px", border: "2px solid #ff4742", color: "#fff", backgroundColor: "#ff4742", padding: "8px", fontWeight: 800, height: "auto", width: "70px"}}>Play</button> 
  }

}

export default PlayButton
