import React from "react"
import GridItem from "./GridItem"

const Grid = ({handleGiveID}) => {
  return (
    <div className="gridContainer" style={{ width: "900px", height: "766px" }}>
      <GridItem handleGiveID={handleGiveID} />
    </div>
  )
}

export default Grid

