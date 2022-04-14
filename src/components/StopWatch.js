import React from "react";
import { useStopwatch } from "react-timer-hook"
import PlayButton from "./PlayButton"

const StopWatch = () => {
  const {seconds, minutes, hours, start, isRunning, pause, reset} = useStopwatch({ autoStart: false })

  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "12px"}}>
      <div style={{fontSize: "32px", color: "#AFD6EC", width: "75px"}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
       {/* <button onClick={reset}>Restart</button>  */}
      <PlayButton start={start} pause={pause} isRunning={isRunning} />
    </div>
  );
}

export default StopWatch
