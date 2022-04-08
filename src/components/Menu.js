import React from "react"

const Menu = ({ x, y, showMenu, handleSecondOperation }) => {   

    const handleGetTarget = (e) => {
        e.preventDefault()
        let target = e.currentTarget.getAttribute("data-target")
        handleSecondOperation(target)
      }
   
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
    return (
        <div className="popupMenu" style={style()}>
            <div onClick={handleGetTarget} style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}} data-target="smilingFish">smiling fish</div>
            <div onClick={handleGetTarget} style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}} data-target="sleepyFish">sleepy fish</div>
            <div onClick={handleGetTarget} style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}} data-target="backwardsFish">backwards fish</div>
        </div>
    )
}

export default Menu