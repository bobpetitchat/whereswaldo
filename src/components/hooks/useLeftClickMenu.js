import { useState, useEffect } from "react"

function useLeftClickMenu() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [showMenu, setShowMenu] = useState(false)

    const handleContextMenu = (e) => {
        e.preventDefault()
        setX(e.pageX)
        setY(e.pageY)
        document.querySelector(".ReactModal__Content.ReactModal__Content--after-open") ? setShowMenu(false) : setShowMenu(true)
    }

    const handleCreate = () => {
        showMenu && setShowMenu(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleCreate)
        document.addEventListener("click", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleCreate)
            document.removeEventListener("click", handleContextMenu)
        }
    })
    return { x, y, showMenu }
}

export default useLeftClickMenu 
