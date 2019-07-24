import React from "react"



const CoverPage = (props) =>(
    <div className='cover'>
    <h1 style={{position:"relative",transform:"translateY(300px)",fontSize:"60px",letterSpacing:"10px"}}>CLICK TO CHECK OUT </h1>
    <img style={{width:"100%",height:"100vh",marginTop:"-10%"}} onClick={props.nextPage} src={props.covers[Math.floor(Math.random()*props.covers.length)]}/>
    </div>
)

export default CoverPage;