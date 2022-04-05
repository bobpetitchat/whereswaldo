import React from "react"

const GridItem = ({ i }) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    // handleClickedFish(e.currentTarget.id)
    let id = e.currentTarget.id
    alert(id + " has been found!")
    handleClassChange()
  }

  return (
    <div className="grid-item" onClick={handleClick} id={i}></div>
  )
}

export default GridItem