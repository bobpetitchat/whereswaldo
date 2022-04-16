import React, { useEffect, useContext } from "react"
import { UserContext } from "./context/UserContext"

const Form = ({ setIsOpen }) => {

  const { setUsers, setInfo, info, users } = useContext(UserContext)

  const handleChange = (e) => {
    e.preventDefault()
    setInfo({
      ...info,
      username: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(false)
    // closes modal
    setUsers([...users, info])
    // adds user to the list of users
  }

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <form>
      <label htmlFor="username">
        <input onChange={handleChange} value={info.username} />
      </label>
      <button style={{ outline: "none", backgroundColor: "transparent", border: "none", backgroundColor: "#fff", cursor: "pointer", margin: "5px", marginLeft: "10px" }} type="submit" onClick={handleSubmit}>Start</button>
    </form>
  )
}

export default Form