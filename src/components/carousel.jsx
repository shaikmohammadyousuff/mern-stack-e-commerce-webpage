import img from '../assets/caro1.jpg';
import img2 from '../assets/caro2.jpg';
import img3 from '../assets/caro3.jpg';
export const Carousel = () => {
  return (
    <>
       <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" height={'650px'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" height={'650px'} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3}  className="d-block w-100" height={'650px'} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
     
    </>
  )
}