import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

export const Navbar = () => {
  let  cartValue = useSelector(state => state.cart)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          {/* <li> */}
          <Link  className="navbar-brand nav-item" to='/index.html' >Logo</Link>
          {/* </li> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to='/'>Home</Link>
              </li>
               
               <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to='/cart'>Cart <sup>{cartValue.length}</sup></Link>
              </li>
               <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to='/Ud'>User's Data</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Link</a> */}
                <Link className="nav-link" to='/Authentication  '>SignUp</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link " >Products</a> */}
                                <Link className="nav-link" to='/Products  '>Products</Link>

              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
