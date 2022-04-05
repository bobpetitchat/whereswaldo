import { useEffect, useState } from "react"

const GetMousePosition = () => {
  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener("mousemove", update)
      window.addEventListener("touchmove", update)
      return () => {
        window.removeEventListener("mousemove", update)
        window.removeEventListener("touchmove", update)
      }
    },
      [setX, setY]
  )
  return <h1 style={{ fontSize: "13px" }}>{`x: ${x} / y: ${y}`}</h1> 
}

export default GetMousePosition


