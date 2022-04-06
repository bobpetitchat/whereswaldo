import React, { useEffect, useState } from "react"
import _ from "lodash"

function GridItem({ handleAlert, menuPopup, setMenuPopup }) {
  const [gridItems, setGridItems] = useState([])
  // const [currentItem, setCurrentItem] = useState({})
  let newCurrentItem = ""

  const handleClick = (e) => {
    e.preventDefault()
    let id = e.currentTarget.id
    handleTargetedItem(id)
  }

  let gridArray = _.times(600, (i) => (
    <div className="gridItems" onClick={handleClick} key={i} id={i}></div>
  ))

  useEffect(() => {
    setGridItems([gridArray])
  }, [])

  const handleTargetedItem = (id) => {
    for (let j = 0; j < gridArray.length; j++) {
      if (id === gridArray[j].key) {
        console.log("success! " + gridArray[j].key)
        newCurrentItem = gridArray[j]
        console.log(newCurrentItem.props.id)
        return newCurrentItem.props.id
      }
    }
  }

  return (
    [gridArray]
  )
}
export default GridItem

