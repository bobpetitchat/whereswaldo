import React from "react"
import GridItem from "./GridItem"
import _ from "lodash"

const Grid = ({ handleAlert }) => {
       return (
      <div className="gridContainer" style={{ width: "700px", height: "565px" }}>
           <GridItem handleAlert={handleAlert}/>
      </div> 
        )
  }

export default Grid

