import { useState, useEffect } from "react"

const MenuClick = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    
    const handleCreate = () => {
    // initializes showMenu and sets it to false
        showMenu && setShowMenu(false)
    }

    const handleContextMenu = (e) => {
        e.preventDefault()
        setX(e.pageX)
        setY(e.pageY)
        setShowMenu(true)
    }
    
    useEffect(() => {
        document.addEventListener("click", handleCreate)
        document.addEventListener("click", handleContextMenu)
        return () => {
            document.removeEventListener("click", handleCreate)
            document.removeEventListener("click", handleContextMenu)
        }
    }, [])
    return {x, y, showMenu, setShowMenu}
}

export default MenuClick