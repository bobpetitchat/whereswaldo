import { useState, useEffect } from "react"

const useLeftClickMenu = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [showMenu, setShowMenu] = useState(false)

    const handleContextMenu = (e) => {
        e.preventDefault()
        setX(e.pageX)
        setY(e.pageY)
        setShowMenu(true)
    }

    const handleCreate = () => {
        showMenu && setShowMenu(false)
    }

    useEffect(() => {
        document.querySelector(".gridContainer").addEventListener("click", handleCreate) 
        document.querySelector(".gridContainer").addEventListener("click", handleContextMenu) 
        return () => {
            if (document.querySelector(".gridContainer") === null) return
            document.querySelector(".gridContainer").removeEventListener("click", handleCreate)
            document.querySelector(".gridContainer").removeEventListener("click", handleContextMenu) 
        }
    }, [showMenu])
    return { x, y, showMenu }
}

export default useLeftClickMenu 
