import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/Banner-1 (2).jpg'
import banner2 from '../../../Images/Banner/blog-new-8.jpg'
import banner3 from '../../../Images/Banner/Banner-3.jpg'

const Banner = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Rochester General Hospital</h3>
                            <p>1425 Portland Ave, Rochester, NY 14621, United States</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Never-ending nightmare</h3>
                            <p>Nurses tend to patients in hallways at the Houston Methodist The Woodlands Hospital,.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Cardiac Catheterization</h3>
                            <p>Rochester General Hospital Cath Lab, Rochester, New York. From Hoover C. Cath lab spotlight.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;
