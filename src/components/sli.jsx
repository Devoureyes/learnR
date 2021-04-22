import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://lh3.googleusercontent.com/proxy/BWP_o2PvjpZpsCmgFoEQqqIg2iLpwkudxPxfMwFyIBr-g6AQlqHZINqTdrEf69xc_2VutibRhUZbo1PG367EyXZ3Du1mClxvWl7rHMPZMkpzsE9nBo0hfuIICfpQSqYKtk0eAKhZ" alt=""/>
                    </div>
                    <div>
                        <img src="https://lh3.googleusercontent.com/proxy/uQo7eCAWr41yXvkFWCKoFuVORraXCi7Y09x0W9eF2rTy2xQhvEyh4bFLPJaUnouDaqU_velWmq2qJwa0ZOcVwxMP965FvnEIcShV_uOQNSXQ7DlfKMZqblgLQl3fDyd-5YYVWjI" alt=""/>
                    </div>
                </Slider>
            </div>
        );
    }
}
