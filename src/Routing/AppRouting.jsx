import { Route, Routes } from "react-router-dom"
import { Carousel } from "../components/carousel"
import { Home } from "../Pages/Home"
import { Navbar } from "../components/navbar"
import { UserList } from "../Pages/UsersData"
import { Authentication } from "../Pages/Authentication"
import Mainpage from "../Pages/Mainpage"
import { Products } from "../Features/products/Products"
import { ProductDetails } from "../Features/products/Productdetail"
import { Cart } from "../Pages/cart"
 


export const AppRouting =()=>{

    
    return(
        <>
           
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="index.html" element={<Mainpage/>} />
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Navbar' element={<Navbar/>}/>
            <Route path='/Products' element={<Products/>} />
            <Route path='/Products/:id' element={<ProductDetails/>} />
            <Route path='/Ud' element={<UserList/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path="/Authentication" element={<Authentication/>}/>
        </Routes>
        </>
    )
}