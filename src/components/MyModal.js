import React, { useState } from "react"
import Modal from "react-modal"

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "190px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
    },
};

Modal.setAppElement("#yourAppElement")

const MyModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState("")

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${name}`)
    }

    return (
        <div className="modal">
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: "14px" }}>Enter your name:</h2>
                    <input style={{ width: "100px" }} value={name} type="text" onChange={e => setName(e.target.value) && console.log("change!")} />
                    <button style={{ width: "50px", cursor: "pointer"}} type="submit">Start</button>
                </form>
            </Modal>
        </div>
    )
}

export default MyModal 