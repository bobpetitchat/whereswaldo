import React, { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"

const Form = ({ setIsOpen }) => {

  const { setUsers, setInfo, info, users } = useContext(UserContext)

   const handleChange = (e) => {
    e.preventDefault()
    setInfo({
      ...info,
      username: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(false)
    if (info.username === "") return
    setInfo({
      ...info
    })
    setUsers([...users, info])
  }

  return (
    <form>
      <label htmlFor="username">
        <input onChange={handleChange} value={info.username} />
      </label>
      <button style={{ outline: "none", border: "none", backgroundColor: "#fff", cursor: "pointer", margin: "5px", marginLeft: "10px" }} type="submit" onClick={handleSubmit}>Start</button>
    </form>
  )
}

export default Form
