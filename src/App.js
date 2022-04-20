import React, { useEffect, useState, useContext } from "react"
import Gameboard from "./components/Gameboard"
import Navbar from "./components/Navbar"
import Modal from "react-modal"
import Form from "./components/Form"
import { UserContext } from "./components/context/UserContext"
import { db } from "./firebase-config"
import { collection, getDocs } from "firebase/firestore"
import { TargetArraysContext } from "./components/context/TargetArraysContext"

Modal.setAppElement("#root")
// for the modal

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const { users, isRunning, minutes, seconds } = useContext(UserContext)
  // targets array database
  const [arrays, setArrays] = useState([])
  const arrayCollectionRef = collection(db, "choices")
  // form databse
  const formColRef = collection(db, "form")

  useEffect(() => {
    users.length === 0 ? setIsOpen(true) : setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getArrays = async () => {
      const data = await getDocs(arrayCollectionRef)
      setArrays(data.docs.map((doc) => ({ ...doc.data() })))
    }
    getArrays()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  useEffect(() => {
    if (isRunning) return 
    if (!isRunning) {
      console.log(minutes + seconds)
    }
  })

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
      <TargetArraysContext.Provider value={{arrays}}> 
        <Modal isOpen={isOpen} style={{ width: "200px" }}>
          <Form setIsOpen={setIsOpen} />
        </Modal>
          <Gameboard />
        </TargetArraysContext.Provider>
        </div>
    </div>
  )
}

export default App

