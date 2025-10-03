import { Carousel } from "../components/carousel"
import { Footer } from "../components/footer"
import { Navbar } from "../components/navbar"

export const Home = () => {
    return (
        <>
        <Navbar/>
        <Carousel />
        <h1>This is Home page</h1>
        <Footer/>
        </>
    )
}