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
        console.log("handleContextMenu running!")
    }

    const handleCreate = () => {
        showMenu && setShowMenu(false)
        console.log("handleCreate running!")
    }

    useEffect(() => {
        document.addEventListener("click", handleCreate)
        document.addEventListener("contextmenu", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleCreate)
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    })
    return {x, y, showMenu}
}

export default useRightClickMenu