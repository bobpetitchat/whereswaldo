import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Leaderboard from "./components/Leaderboard"  

const RouteSwitch = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />    
        <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
      </BrowserRouter>
  )
}

export default RouteSwitch