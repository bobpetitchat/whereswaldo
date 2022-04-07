import React, { useState, useEffect } from "react"

function useRightClickMenu () {
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
        document.addEventListener("click", handleCreate)
        document.addEventListener("click", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleCreate)
            document.removeEventListener("click", handleContextMenu)
        }
    }, [])
    return {x, y, showMenu}
}

export default useRightClickMenu