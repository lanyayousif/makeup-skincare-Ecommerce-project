import React from 'react'
import './container.css'

export default function Container({children}) {
  return (
    <div className='xl:container  containers container   mx-auto'>{children}</div>
  )
}
