import { useState } from "react"
import Login from "../Features/Authentication/Login"
import { Registor } from "../Features/Authentication/Registor"
import { Navbar } from "react-bootstrap"

export const Authentication = ()=>{
    let [state,setState ]= useState(false)

    
    return(
        <>
        <Navbar />
            
<section className="vh-100" style={{backgroundColor: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius:"25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
                <div className="container ">
                <button className="btn btn-outline-primary mx-3" onClick={()=>setState(false)}>signUp</button>
                <button className="btn btn-outline-primary mx-3" onClick={()=>setState(true)}>Login</button>
                </div>
                {
                    state ? <Login />:<Registor />
                }

              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}