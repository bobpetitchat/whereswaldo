import React, {useEffect, useState} from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import Modal from "react-modal"
Modal.setAppElement("#root")

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.querySelector(".playButton").addEventListener("click", () => {
      setIsOpen(true)
    })
  }
  )

  return (
    <div className="App">
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={{width: "200px"}}>
        <input placeholder="Name"/>
        <button onClick={closeModal}>Start</button>
      </Modal>
      <Navbar />
      <Gameboard />
    </div>
  )
}

export default App

