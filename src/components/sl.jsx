import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
    'https://images.wallpaperscraft.ru/image/ulitsa_osveshchenie_podsvetka_134856_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/ulitsa_gorod_vid_sverhu_201352_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/ulitsa_zdaniia_doroga_201311_1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/ulitsa_zdaniia_avtomobili_149739_1920x1080.jpg',
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Zoom scale={0.9}>
                {
                    images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
                }
            </Zoom>
            <br/>
        </div>
    )
}

export default Slideshow;
