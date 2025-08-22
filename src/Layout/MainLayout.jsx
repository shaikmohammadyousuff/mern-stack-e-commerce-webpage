import { useLocation } from "react-router-dom"
 
import { Footer } from "../components/footer"
 
import { Navbar } from "../components/navbar"
import { AppRouting } from "../Routing/AppRouting"

export const MainLayout = () =>{
    let Location = useLocation();

    let hideLayout = ['/']

    let showLayout = hideLayout.includes(Location.pathname.toLowerCase());

    return(
        <>
        {!showLayout &&<Navbar />}
       
       <AppRouting />
 
        {!showLayout && <Footer/>}
        </>
    )
}