import React, { useEffect, useState, useContext } from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import Modal from "react-modal"
import Form from "./components/Form"
import { UserContext } from "./components/context/UserContext"
import { db } from "./firebase-config"
import { collection } from "firebase/firestore"
Modal.setAppElement("#root")

const App = () => {
  const [arrays, setArrays] = useState([])
  const arrayCollectionRef = collection(db, "choices")
  useEffect(() => {
    const getArrays = async () => {

    }
    getArrays()
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const { users } = useContext(UserContext)

  useEffect(() => {
    users.length === 0 ? setIsOpen(true) : setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Modal isOpen={isOpen} style={{ width: "200px" }}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
        <Gameboard />
      </div>
    </div>
  )
}

export default App

