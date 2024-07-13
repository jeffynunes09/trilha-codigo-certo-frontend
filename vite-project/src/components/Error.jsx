import React from 'react'
import "./Error.css"
function Error({message}) {
  return (
    <div className='contaiter-p'>
        <p id='error'>{message}</p>
    </div>
  )
}

export default Error