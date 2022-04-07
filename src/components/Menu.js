import React from "react"

const Menu = ({x, y, showMenu}) => {
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
        <div style={style()}>
            <div style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}}>smiling fish</div>
            <div style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}}>sleepy fish</div>
            <div style={{color: "blue", padding: "6px", fontFamily: "monospace", fontSize: "14px", fontWeight: "600"}}>backwards fish</div>
        </div>
    )
}

export default Menu