import React from "react"
import GridItem from "./GridItem"
import _ from "lodash"

const Grid = () => {
     return (
      <div className="grid-container" style={{ width: "700px", height: "565px" }}>
        {_.times(616, (i) => (
          <GridItem key={i} i={i} />
        ))} 
      </div> 
    );
  }

export default Grid