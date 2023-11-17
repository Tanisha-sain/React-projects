import React from 'react'

const Button = ({ value, reqType, setReqType }) => {
  return (
    <button
        className={value === reqType ? 'selected' : null}
        type='button'
        onClick={()=> setReqType(value)}
    >{value}</button>
  )
}

export default Button