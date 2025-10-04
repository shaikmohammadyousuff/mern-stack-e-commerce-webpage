import React from 'react'
import mensa from '../assets/mensa.jpg'
import mens from '../assets/mens.jpg'
import womenwear from '../assets/womenwear.jpg'
import chairs from '../assets/chairs.jpg'
import interior from '..//assets/interior.jpg' 
import oys from '../assets/oys.jpg'
import sofa from '../assets/sofa.jpg'

export default function Items() {
    return (
        <>
            <main>
                 {/* <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p> <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </div>
            </section> */}
                <div className="album py-5 bg-body-tertiary">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={mensa}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />
                                                                         <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={womenwear}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div> <small className="text-body-secondary">9 mins</small> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={mens}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={chairs}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />                                    <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={oys}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />                                    <div className="card-body"> <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div> <small className="text-body-secondary">9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
 <img
                                        src={interior}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    />                                     <div className="card-body"> 
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                                        <div className="d-flex justify-content-between align-items-center"> 
                                            <div className="btn-group"> 
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> <div className="col"> <div className="card shadow-sm">  <img
                                        src={sofa}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    /><div className="card-body"> <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> <div className="col"> <div className="card shadow-sm">  <img
                                        src={mensa}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    /> <div className="card-body"> <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> <div className="col"> <div className="card shadow-sm">  <img
                                        src={interior}
                                        alt="Thumbnail"
                                        className="card-img-top"
                                        style={{ height: "225px", objectFit: "cover" }}
                                    /><div className="card-body"> <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> <div className="d-flex justify-content-between align-items-center"> <div className="btn-group"> <button type="button" className="btn btn-sm btn-outline-secondary">View</button> <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> </div> <small className="text-body-secondary">9 mins</small> </div> </div> </div> </div> </div> </div> </div> </main>
        </>
    )
}
