import React, { useEffect, useState } from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import Modal from "react-modal"
import Form from "./components/Form"

Modal.setAppElement("#root")

const App = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{display: "flex", flexDirection: "row"}}>
        <Modal isOpen={isOpen} style={{ width: "200px" }}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
        <Gameboard />
      </div>
    </div>
  )
}

export default App

