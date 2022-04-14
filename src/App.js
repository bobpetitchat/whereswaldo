import React, {useEffect, useState} from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import Modal from "react-modal"
import Form from "./components/Form"

Modal.setAppElement("#root")

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${username} submitted!`)
    setIsOpen(false)
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  useEffect(() => {
      setIsOpen(true)
  }, [])

  return (
    <div className="App">
      <Modal isOpen={isOpen} style={{ width: "200px" }}>
        <Form handleChange={handleChange} handleSubmit={handleSubmit} username={username} />
      </Modal>
      <Navbar />
      <Gameboard />
    </div>
  )
}

export default App

