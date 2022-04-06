import React, { useEffect, useState } from "react"
import _ from "lodash"

function GridItem({ handleAlert }) {
  const [gridItems, setGridItems] = useState([])
  
  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleAlert(id)
    whichWasClicked(id)
  }

  let gridArray =  _.times(600, (i) => (
    <div className="gridItems" onClick={handleClick} key={i} id={i}></div>
  ))

  useEffect(() => {
    setGridItems([gridArray])
    console.log(gridItems)
  }, [])
  
   const whichWasClicked = (id) => {
     for (let j = 0; j < gridArray.length; j++) {
       if (id === gridArray[j].key) {
         console.log("success! " + gridArray[j].key)
         return gridArray[j].key
       }
     }     
  }
  return (
    [gridArray]
  )
}
export default GridItem

