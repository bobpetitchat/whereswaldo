import React from "react"
import GridItem from "./GridItem"

const Grid = ({takeIDtoCheckFunc}) => {
  return (
    <div className="gridContainer" style={{ width: "900px", height: "766px" }}>
      <GridItem takeIDtoCheckFunc={takeIDtoCheckFunc} />
    </div>
  )
}

export default Grid

