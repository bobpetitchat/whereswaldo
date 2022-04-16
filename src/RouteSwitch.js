import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Leaderboard from "./components/Leaderboard"  
import { UserContext } from "./components/context/UserContext"

const RouteSwitch = () => {
  const [info, setInfo] = useState({ username: "" })
  const [users, setUsers] = useState([])

  return (
    <BrowserRouter>
     <UserContext.Provider value={{info, setInfo, users, setUsers}}>
      <Routes>
        <Route path="/" element={<App />} />    
        <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
  )
}

export default RouteSwitch

