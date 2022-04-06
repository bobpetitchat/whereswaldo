import React, { useState } from "react"
import GridItem from "./GridItem"
import _ from "lodash"
import Popup from "./Popup"

const Grid = ({ handleAlert }) => {
  const [menuPopup, setMenuPopup] = useState(false)

       return (
      <div className="gridContainer" onClick={() => setMenuPopup(!menuPopup)} style={{ width: "700px", height: "565px" }}>
           <GridItem handleAlert={handleAlert} />
           <Popup trigger={menuPopup} />
      </div> 
        )
  }

export default Grid

