import React from "react"

const Menu = ({ x, y, showMenu, handleGiveTarget }) => {

    const style = () => {
        return {
            height: 95,
            width: 120,
            borderRadius: 4,
            color: "black",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "hsla(60, 31%, 93%, 0.774)",
            padding: 10,
            top: y,
            left: x,
            position: "absolute",
            display: showMenu ? "flex" : "none",
            cursor: "pointer",
            zIndex: "10"
        }
    }

    const handleGetTarget = (e) => {
        e.preventDefault()
        handleGiveTarget(e.currentTarget.getAttribute("data-target"))
    }

    return ( 
        <div className="popupMenu" style={style()}>
            <div onClick={handleGetTarget} className="choices" data-target="smilingFish" style={{ color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600" }}>smiling fish</div>
            <div onClick={handleGetTarget} className="choices" data-target="sleepyFish" style={{ color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600" }}>sleepy fish</div>
            <div onClick={handleGetTarget} className="choices" data-target="backwardsFish" style={{ color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600" }}>backwards fish</div>
        </div>
    )
}

export default Menu