import React from 'react'

interface props {
  text: string
}

export const Button = ({ text }: props) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  )
}
