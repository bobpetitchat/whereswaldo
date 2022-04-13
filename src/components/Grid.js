import React from "react"
import GridItem from "./GridItem"

const Grid = ({handleGiveID, handleClickInside, reference}) => {
  return (    
    <div className="gridContainer" style={{ width: "800px", height: "681px" }} >
    <GridItem handleClickInside={handleClickInside} ref={reference} handleGiveID={handleGiveID} />
    </div>
  )
}

export default Grid

