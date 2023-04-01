import React from 'react'
import './container.css'

export default function Container({children}) {
  return (
    <div className='lg:container lg:mx-auto containers'>{children}</div>
  )
}
