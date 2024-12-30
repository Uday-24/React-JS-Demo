import React from 'react'
import placeholderImage from '../images/placeholder.jpg';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="carousel-container w-75 mx-auto mb-5"> {/* Adjust the width of the container */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={placeholderImage} className="d-block w-100" alt="Slide 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={placeholderImage} className="d-block w-100" alt="Slide 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={placeholderImage} className="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <section>
                    <p>
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Home
