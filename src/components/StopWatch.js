import React from "react";
import { useStopwatch } from "react-timer-hook"

const StopWatch = () => {
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div style={{textAlign: "center"}}>
      <div style={{fontSize: "38px", color: "#AFD6EC"}}>
       <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      {/* <button onClick={reset}>Restart</button> 
      <button onClick={start}>Start</button> */}
    </div>
  );
}

export default StopWatch