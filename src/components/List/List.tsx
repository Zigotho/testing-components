import React from 'react'

interface props {
  renderList: string[]
}
export const List = ({ renderList }: props) => {
  return (
    <div>
      <ul>
        {renderList.map((element, index) => {
          return <li key={index}>{element}</li>
        })}
      </ul>
    </div>
  )
}
