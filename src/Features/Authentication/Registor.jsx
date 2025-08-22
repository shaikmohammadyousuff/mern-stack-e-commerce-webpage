import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Registor = ()=>{
  let navigation = useNavigate()

  let [name,setName] = useState('')
  let [email,setemail] =useState('')
  let [password,setpassword] = useState('')


  let [errname,seterrname] = useState('')
  let [erremail,seterremail] = useState('')
  let [errpassword,seterrpassword] = useState('')

  function asihari() {
    if (name.length<=0 || email.length<=0 || password.length<=0) {
      seterrname('Enter your name')
      seterremail('Enter your email')
      seterrpassword('Enter your password')
    }
    else{
      seterrname('')
      seterremail('')
      seterrpassword('')
      navigation = ("/src/Pages/Home.jsx")
    }
  }  
  
  
  
  
  return ( 
        <>
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                
               
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <button className=" btn btn-outline-primary " onClick={()=>{asihari()}}>Submit</button>

                </form>

              </div>
        </>
    )
}