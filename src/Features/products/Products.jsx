// 
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../components/Loader"

export const Products=()=>{

    let [productsData,setProductsData]=useState([])
    let [page,setPage]=useState(1)
    let totalProducts=20;
    useEffect(()=>{
        async function productsApi() {
            let {data}=await axios.get('https://dummyjson.com/products?limit=200')
            setProductsData(data.products)
        }
        productsApi()
    },[])
    let pagination=productsData.slice((page-1)* totalProducts,page*totalProducts)
    
    // let data=18;
    return(
        <>

        {/* <h1>{data =18 ? 'yes':'no'}</h1> */}
        <div className="container mt-4">
            <div className="row gx-4 gy-4">
                
                  {
                pagination.length>0 ?   
                 
                        pagination.map(product=>(
                    <div className="col-3" key={product.id}>
                    <div className="card h-100 shadow">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.thumbnail} className="card-img-top" alt="..." style={{height:'200px',objectFit:'contain'}}/>
                            </Link>
                            <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description.length>100 ? product.description.slice(0,100)+'...':product.description}</p>
                            {/* <button className="container btn btn-outline-secondary "onClick={()=>}>Add to Cart</button> */}
                            {/* <button className="btn btn-danger m-3">Remove</button> */}
                            </div>
                    </div>
                    </div>
                    ))
      
                : 
                <>
                 <Loader />
                </>

               }
        
            </div>
        </div>
        <div className="row m-5 justify-content-around">
            {
            [1,2,3,4,5,6,7,8,9,10].map(btn=>(
                <div className="col-1">
                    <button className={`btn $(page === btn ? "btn btn-secondary":"btn btn-primary bg-info")`} onClick={()=>setPage(btn)}>{btn}</button>
                </div>

            ))
        }

        </div>
        
        </>
    )
}