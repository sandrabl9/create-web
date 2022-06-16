import React from 'react'

export const CardCollection = ({ name, description, img }) => {



  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>
          <img src={img} alt={`collection${name}`}/>
        </div>


      </div>
    </li>
  )
}
