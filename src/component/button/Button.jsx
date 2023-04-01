import React from 'react'
import './button.css'
function Button({children,hide,classbtn}) {
  return (
    <button 
    className={`${hide}  ${classbtn} main-btn px-8 py-4 w-fit bg-bg-second uppercase text-base font-bold m-4 rounded text-white-text `}>{children}</button>
  )
}

export default Button