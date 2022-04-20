import React, { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"
import { addDoc, collection, getDoc } from "firebase/firestore"
import { TargetArraysContext } from "./context/TargetArraysContext"
const Form = ({ setIsOpen }) => {

  const { setUsers, setInfo, info, users, isRunning, minutes, seconds} = useContext(UserContext)
  const { db } = useContext(TargetArraysContext)
  const formColRef = collection(db, "form")

  useEffect(() => {
    if (isRunning) return 
    if (!isRunning) {
      console.log(minutes + seconds)
    }
    
  })

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
    setInfo({
      ...info
    })
    setUsers([...users, info])
    addDoc(formColRef, {...info})
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
