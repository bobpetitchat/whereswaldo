import React, { useEffect } from "react"
import Menu from "./Menu"
import useLeftClickMenu from "./hooks/useLeftClickMenu"
import Grid from "./Grid"

const Image = ({ handleGiveTarget, handleGiveID }) => {

    const { x, y, showMenu, setShowMenu } = useLeftClickMenu()

    const specificStyle = {
        maxWidth: "800px",
        maxHeight: "681px"
    }

    return (
        <div className="imageGameboard" style={specificStyle}>
            <Menu x={x} y={y} showMenu={showMenu} setShowMenu={setShowMenu} handleGiveTarget={handleGiveTarget} />
            <Grid handleGiveID={handleGiveID}/>
            <img alt="gameboard" style={specificStyle} src="https://raw.githubusercontent.com/bobpetitchat/whereswaldo/main/public/images/morehqfixed.png" />
        </div>
    )
}

export default Image