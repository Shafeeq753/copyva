import React from "react";
import Slider from "react-slick";
import MusicImg from '../../../assets/music_img.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider>
    <div className="recent_innerContent">
            <img src={MusicImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>  

        <div className="recent_innerContent">
            <img src={MusicImg} alt="" />
            <div><h4>Lorem ipsum </h4>
            <p>Lorem ipsum dolor sit amet consect amet</p></div>
        </div>  
     
    </Slider>
  );
}