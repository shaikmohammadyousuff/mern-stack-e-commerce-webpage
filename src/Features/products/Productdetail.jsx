import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader";
import { ADDTOCART, REMOVE } from "../Cart/cartSlice";
import { useDispatch } from "react-redux";

export const ProductDetails=()=>{
    let [productD,setProductD]=useState({})
    let {id}=useParams()
    console.log(id);

    let dispatch = useDispatch()
    useEffect(()=>{
        async function dataApi() {
            let {data}=await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(data);
            setProductD(data);
            
        }
        dataApi()
    },[])
    
    return(
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                    {
                        Object.keys(productD.length>0)?
                        <>
                        <div className="row shadow" key={productD.id}>
                            <div className="col-7 p-4">
                            <img src={productD.thumbnail} className="shadow" style={{height:'400px' ,objectFit:'contain'}} alt="" />
                            </div>
                            <div className="col-5">
                                <h1>{productD.title}</h1>
                                <p>{productD.description}</p>
                                <mark>RS:{productD.price}, Ratting:{productD.rating}</mark>
                                <br></br>   
                            <button className="btn btn-outline-warning m-3"onClick={()=>dispatch(ADDTOCART({...productD,quantity:1}))}>Add to Cart</button>
                            <button className="btn btn-outline-danger m-3"onClick={()=>dispatch(REMOVE(productD.id))}>Remove</button>
                             </div>

                        </div>  
                        </>:
                        <>
                        <Loader/>
                        </>

                    }
            </div>
        </div>
        </>
    )
}