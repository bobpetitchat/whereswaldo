import React, { useEffect, useState } from "react"
import _ from "lodash"

const GridItem = ({handleGiveID}) => {
  const [gridItems, setGridItems] = useState([])

  const handleClick = (e) => {
    handleGiveID(e.currentTarget.id)
  }
  
  let gridArray = _.times(870, (i) => (
    <div className="gridItems" onClick={handleClick} key={i} id={i}></div>
  ))

  useEffect(() => {
    setGridItems([gridArray])
  }, [])

  return (
    [gridArray]
  )
}
export default GridItem

