import React from "react"
import Header from "./Header"
import ItemList from "./ItemList.js"
import CheckOutList from "./CheckOutList.js"




const Checkout = (props) =>(
   <div className='checkout-container'>
   <Header/>
  
   <div className='checkout-shopping-items-container'>
   <div className='checkout-div'>
   <CheckOutList total={props.total}
                 tax={props.tax}
                 boughtitems={props.boughtitems}/>

   </div>
   <div className="items-container">
   {props.items.map(item=>(
       <ItemList key={item.id}
                  id={item.id}
                 name={item.name}
                 price={item.price}
                 buyItem={props.buyItem}
                 description={item.description}
                 image={item.img}/>
   ))}
   </div>

   </div>
   </div>
)

export default Checkout;