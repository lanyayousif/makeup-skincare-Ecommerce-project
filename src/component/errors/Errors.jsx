import React from 'react'

export default function Errors({message}) {
  return (
    <p className="my-2 mx-auto max-w-[600px]  text-red-600  font-normal text-lg capitalize">{message}</p>
  )
}
