import React from 'react'
import "./Loader.scss"

const Loader = () => {
  return (
    <div>
        <div className = "loader-container">
        <div className = "lds-hourglass">
        </div>
        <h2 className = "loader-text">Loading</h2>
        </div>
    </div>
  )
}

export default Loader