import React, { useEffect, useState } from "react"
import _ from "lodash"

const GridItem = ({ handleGiveID }) => {  
  // eslint-disable-next-line
  const [gridItems, setGridItems] = useState([])

  const handleClick = (e) => {
    handleGiveID(e.currentTarget.id)
  }
  
  let gridArray = _.times(700, (i) => (
    <div className="gridItems" onClick={handleClick} style={{fontSize: "11px", color:"white", fontWeight: "600"}} key={i} id={i}></div>
  ))

  useEffect(() => {
    setGridItems([gridArray])
  }, [])

  return (
    [gridArray]
  )
}
export default GridItem

