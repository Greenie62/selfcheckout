import React from "react"


const CheckOutList = (props) =>{


    return(
    <div className="check-out-div">
    {props.boughtitems.map(item=>(
        <li key={props.name} className="buy-list-item">{item.name}  ${item.price}   Quantiy:{item.quantity}</li>
    ))}
    <h3>Tax:{props.tax}</h3>
    ------------------------
    <h1>Total:{props.total}</h1>
    </div>
    )
}

export default CheckOutList