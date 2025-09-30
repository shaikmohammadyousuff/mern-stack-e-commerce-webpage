 
 
import Loader from "../components/Loader"
 
import { useDispatch, useSelector } from "react-redux"
import { DEC, INC, REMOVE } from "../Features/Cart/cartSlice"
import { useState } from "react"
import { ProductDetails } from "../Features/products/Productdetail"

export const Cart=()=>{
        
    let cartData = useSelector(state=>state.cart)
let dispatch =useDispatch()

console.log(cartData);

   return(
    <>
    <div className="container mt-5">
        <div className=" container row gy-2">
            <div className="row">
        {
            cartData.length>0 ?
            <>
                {
                    cartData.map(item =>(
                        
                        <div className="col-4" key={item.id}>
                            <div className="card-body shadow mx-4 w-100">
                        <div className="card h-100 shadow ">
                            <h1>{item.title}</h1>
                            <img src={item.thumbnail} alt=""/>
                            <h2  >{item.price}</h2>
                            <button className="btn btn-warning mx-3" onClick={()=>dispatch(INC(item.id))}>+</button>
                            
                            <button className="btn-btn-btn-danger mx-3" onClick={()=>dispatch(DEC(item.id))}>-</button>
                            <button className="btn-btn-btn-outline-danger mx-3" onClick={()=>REMOVE(ProductDetails)}>Remove</button>
                        </div>
                        </div>
                        </div>
                     
                    ))
                }        
            </>
            : <><center><Loader />...Loading</center></>
        }
    </div>
    </div>
    
    

    </div>
        </>
   )
}