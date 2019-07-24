import React from "react"



const InfoCard = (props) =>(
    <div style={{display:!props.toggle ? "none" : "flex"}} className='info-div'>
    <div className='info'>
    <p>Name:{props.name}</p>
    <p>Price:{props.price}</p>
    <p>Description:{props.description}</p>
    </div>
    <div className='image'>
    <img style={{height:"100px"}} alt="food_pic" src={props.image}/>
    </div>
    </div>
)

export default InfoCard