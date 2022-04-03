import React, { useEffect, useRef } from "react"

const OutsideClickHandler = () => {
  let wrapperRef = useRef()

  const onOutsideClick = () => {console.log("yay")}
  
    const handleClickOutside = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
          onOutsideClick();
        }
      };
    useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
        return function cleanup() {
    document.removeEventListener("mousedown", handleClickOutside)
        }
    })
    return (      
        <div ref={wrapperRef}></div>
  )
}

export default OutsideClickHandler