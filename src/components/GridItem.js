import React, { useEffect, useState } from "react"
import _ from "lodash"

const GridItem = ({takeIDtoCheckFunc}) => {  
  const [gridItems, setGridItems] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    let numberId = e.currentTarget.id
    takeIDtoCheckFunc("this is the NumberID" + numberId)
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

