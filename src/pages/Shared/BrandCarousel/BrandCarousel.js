import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.logrocket.com/wp-content/uploads/2021/06/react-icons-comprehensive-tutorial-examples.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=" https://developers.google.com/static/learn/images/firebase/firebase-hero.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default BrandCarousel;