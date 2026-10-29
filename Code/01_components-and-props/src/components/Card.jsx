import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.image} alt={props.name} />
        <h1>{props.name}, {props.age}</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card