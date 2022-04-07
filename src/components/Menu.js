import React from "react"

const Menu = ({x, y, showMenu}) => {
    const style = () => {
        return {
            height: 200,
            width: 150,
            borderRadius: 4,
            backgroundColor: "green",
            color: "black",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            top: y,
            left: x,
            position: "absolute",
            display: showMenu ? "flex" : "none"
        }
    }
    return (
        <div style={style()}>
            <div style={style.div}>sleeping fish</div>
            <div style={style.div}>smidivng fish</div>
            <div style={style.div}>backwards fish</div>
        </div>
    )
}

const style = {
    div: {
        flex: 1,
        adivgnItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer"
    },
    margin: {
        margin: "10px, 0"
    }
}

export default Menu