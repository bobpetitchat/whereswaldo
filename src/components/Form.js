import React from "react"

const Form = ({handleChange, handleSubmit, username}) => {
  return (
      <form>
          <label htmlFor="username">
              <input onChange={handleChange} value={username} />
         </label>
      <button style={{outline: "none", backgroundColor: "transparent", border: "none", backgroundColor: "#fff", cursor: "pointer", margin: "5px", marginLeft: "10px"}} type="submit" onClick={handleSubmit}>Start</button>
    </form>
  )
}

export default Form