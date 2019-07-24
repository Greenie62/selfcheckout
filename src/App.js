import React, {Component} from "react"
import CoverPage from "./components/CoverPage.js"
import Checkout from "./components/Checkout.js"
import items from "./items.json"
import "./App.css"


class App extends Component{

    state={
        total:0,
        tax:.05,
        items:[],
        boughtitems:[],
        pages:1,
        loaded:false,
        covers:["./assets/grocery.jpeg","./assets/grocery2.jpg","./assets/grocery3.jpg"]
    }

    componentDidMount=()=>{
        console.log(items)
        this.setState({loaded:true,
                       items:items})

    }

    nextPage=()=>{
        this.setState({pages:this.state.pages+1})
    }

    buyItem=(price,name)=>{
        console.log("buy item fired!")
        console.log("Price: " + parseFloat(price))
        var newTotal=(this.state.total + parseFloat(price))+(parseFloat(price) * this.state.tax)
        console.log(newTotal)
        console.log(typeof(newTotal))
        var rounded=newTotal.toFixed(2)
        rounded=parseFloat(rounded)
        console.log(typeof(rounded))
       

        var temparray=this.state.boughtitems;
        var itemnames=[];
        temparray.forEach(item=>{
            itemnames.push(item.name)
        })
        console.log(itemnames)
        var newitem={
            name:name,
            price:price,
            quantity:1,
        }
        if(itemnames.indexOf(newitem.name) === -1){
        temparray.push(newitem)
        this.setState({boughtitems:temparray,
                       total:rounded})
        }
        else{
            console.log("in the each condition!")
            var index=itemnames.indexOf(newitem.name)
            temparray[index].quantity++
            this.setState({boughtitems:temparray,
                total:rounded})
        }
    }

  


    render(){
        if(!this.state.loaded){
            return "Loading..."
        }
        
        switch(this.state.pages){

            case 1:
            return(
            <CoverPage nextPage={this.nextPage}
                       covers={this.state.covers}/>
                  )
            break;

            case 2:
            return(
                <Checkout items={this.state.items}
                          info_open={this.state.info_open}
                          buyItem={this.buyItem}
                          total={this.state.total}
                          tax={this.state.tax}
                          boughtitems={this.state.boughtitems}
                           showInfo={this.showInfo}/>
            )
            break;

            default:
            return "You wont see this"
        }
    }
}


export default App;


