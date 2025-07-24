import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div  className='card'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <img src="https://miro.medium.com/v2/resize:fit:700/0*x-HyaNxF4CJW0gSc.png" alt="React" />
    </div>
  )
}

export default Card
