import React from "react"
import GridItem from "./GridItem"

const Grid = ({handleGiveID}) => {
  return (    
    <div className="gridContainer" style={{ width: "800px", height: "681px" }}>
      <GridItem handleGiveID={handleGiveID} />
    </div>
  )
}

export default Grid

