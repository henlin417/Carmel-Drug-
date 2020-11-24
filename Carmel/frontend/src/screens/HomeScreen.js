import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from "../components/images/carousal/Slide1.jpg";
import Slide2 from "../components/images/carousal/Slide2.jpg";
import Slide3 from "../components/images/carousal/Slide3.jpg";
import ShopNow from "../components/images/carousal/ShopNow.png";
import Carmel1 from "../components/images/carousal/carmel1.jpg";
import Carmel2 from "../components/images/carousal/carmel2.jpg";
import { Link } from "react-router-dom";
// import "../components/my-carousal/my-carousal.css";

const HomeScreen = () => {
    return (
        <Carousel controls={true} indicators interval={2500} pause={"hover"}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
                    <Carousel.Caption>
                        <Link to="/homeproductscreen" className="carousal__caption"><img src={ShopNow} /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Carmel2} alt="Third slide" />
                    <Carousel.Caption>
                        <Link to="/homeproductscreen" className="carousal__caption"><img src={ShopNow} /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide" />
                    <Carousel.Caption>
                        <Link to="/homeproductscreen" className="carousal__caption"><img src={ShopNow} /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Carmel1} alt="Third slide" />
                    <Carousel.Caption>
                        <Link to="/homeproductscreen" className="carousal__caption"><img src={ShopNow} /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
                    <Carousel.Caption>
                        <Link to="/homeproductscreen" className="carousal__caption"><img src={ShopNow} /></Link>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
};

export default HomeScreen;