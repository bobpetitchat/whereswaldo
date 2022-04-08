import React from "react"
import GridItem from "./GridItem"

const Grid = ({handleThirdOperation}) => {
  return (
    <div className="gridContainer" style={{ width: "900px", height: "766px" }}>
      <GridItem handleThirdOperation={handleThirdOperation} />
    </div>
  )
}

export default Grid

