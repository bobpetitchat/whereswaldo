import React from "react"
import Menu from "./Menu"
import useLeftClickMenu from "./hooks/useLeftClickMenu"

const Image = ({ handleGiveTarget }) => {

    const { x, y, showMenu, setShowMenu } = useLeftClickMenu()

    const specificStyle = {
        maxWidth: "800px",
        maxHeight: "681px"
    }

    return (
        <div className="imageGameboard" style={specificStyle}>
        <Menu x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleGiveTarget={handleGiveTarget} />
        <img alt="gameboard" style={specificStyle} src="https://raw.githubusercontent.com/bobpetitchat/whereswaldo/main/public/images/morehqfixed.png" />
    </div>
    )
}

export default Image