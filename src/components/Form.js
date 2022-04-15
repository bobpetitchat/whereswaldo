import React, {useState} from "react"

const Form = ({setIsOpen}) => {
  const [info, setInfo] = useState({username: ""})
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
    username: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsOpen(false)
    // closes modal
    setUsers([...users, info.username])
    // adds user to the list of users
  }
  return (
      <form>
          <label htmlFor="username">
              <input onChange={handleChange} value={info.username} />
         </label>
      <button style={{outline: "none", backgroundColor: "transparent", border: "none", backgroundColor: "#fff", cursor: "pointer", margin: "5px", marginLeft: "10px"}} type="submit" onClick={handleSubmit}>Start</button>
    </form>
  )
}

export default Form