import React, { useEffect, useState } from "react"
import _ from "lodash"

const GridItem = ({handleThirdOperation}) => {  
  const [gridItems, setGridItems] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    handleThirdOperation(e.currentTarget.id)
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

