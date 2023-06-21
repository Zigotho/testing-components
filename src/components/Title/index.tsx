import React from 'react'

interface props {
  text: string
}

export const Title = ({ text }: props) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
