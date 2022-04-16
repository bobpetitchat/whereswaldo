import React, { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import { Link } from "react-router-dom"
import uniqid from "uniqid"

const Leaderboard = () => {
  const { users, times } = useContext(UserContext)

  useEffect(() => {
    console.log(times)
  }, [])
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "45px", border: "1px solid black", width: "800px", height: "681px" }}>
      <button style={{ height: "20px", backgroundColor: "#fff", border: "none" }}><Link style={{ textDecoration: "none" }} to="/">Go back</Link></button>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            if (user === null) return
            return (
              <tr key={uniqid()}>
                <td>{user.username}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Leaderboard

