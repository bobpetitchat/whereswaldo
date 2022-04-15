import React from "react"

const Leaderboard = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", margin: "45px", border: "1px solid black", width: "1200px", width: "800px", height: "681px" }}>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Taco</td>
              <td>2:33</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  export default Leaderboard

  