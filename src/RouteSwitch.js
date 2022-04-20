import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Leaderboard from "./components/Leaderboard"  
import { UserContext } from "./components/context/UserContext"
import { useStopwatch } from "react-timer-hook"

const RouteSwitch = () => {  
  const [info, setInfo] = useState({username: "", time: ""})
  const [users, setUsers] = useState([])
  const { seconds, minutes, start, isRunning, pause } = useStopwatch({ autoStart: false })

    useEffect(() => {
    if (isRunning) return 
    if (!isRunning) {
    }
  })

  return (
    <BrowserRouter>
     <UserContext.Provider value={{info, setInfo, users, setUsers, seconds, minutes, start, isRunning, pause}}>
      <Routes>
        <Route path="/" element={<App />} />    
        <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
  )
}

export default RouteSwitch

