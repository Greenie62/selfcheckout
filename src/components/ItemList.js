import React, {useState} from "react"
import InfoCard from "./InfoCard.js"



const ItemList = (props) =>{
    const [toggle, setToggle] =useState(false)

   const showInfo=(e)=>{

setToggle(!toggle)
console.log("Toggle: " + toggle)
}


    return(
    <li className="list-item">{props.name}  <span className='info-span' onClick={showInfo}>see-info</span>
                                            <span className='buy-span' data-price={props.price} data-name={props.name} onClick={(e)=>props.buyItem(parseFloat(e.target.attributes.getNamedItem("data-price").value), e.target.attributes.getNamedItem('data-name').value)}>buy-info</span>
    
    <InfoCard key={props.id}
             id={props.id}
            name={props.name}
            price={props.price}
            toggle={toggle}
            image={props.image}
            info_open={props.info_open}
            description={props.description}/>
    </li>
)
}


export default ItemList;