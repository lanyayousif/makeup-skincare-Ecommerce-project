import React from 'react'
import './button.css'
function Button({children,hide}) {
  return (
    <button className={`${hide}  main-btn px-8 py-4 w-fit bg-bg-second capitalize text-base font-bold m-4 rounded text-white-text `}>{children}</button>
  )
}

export default Button