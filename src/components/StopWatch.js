import React, {useContext} from "react"
import PlayButton from "./PlayButton"
import { UserContext } from "./context/UserContext"

const StopWatch = () => {
  const {seconds, minutes, start, isRunning, pause} = useContext(UserContext)

  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
      <div style={{fontSize: "32px", color: "#AFD6EC", width: "60px"}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <PlayButton start={start} pause={pause} isRunning={isRunning} />
    </div>
  );
}

export default StopWatch

