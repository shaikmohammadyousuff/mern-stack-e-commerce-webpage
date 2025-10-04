import { Carousel } from "../components/carousel"
import { Footer } from "../components/footer"
import Items from "../components/Items"
import Loader from "../components/Loader"
import { Navbar } from "../components/navbar"

export const Home = () => {
    return (
        <>
        
        <Navbar/>
        <Carousel />
        {/* <h1>This is Home page</h1> */}
        <Items/>
        <Footer/>
       
        </>
    )
}