import '../App.css'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const photos=[{

    name: "photo1" ,
    url: require('../img/intro-carousel/help.png')
    },
    {
    
        name: "photo2" ,
        url:  require('../img/intro-carousel/firework.png')
        
    }]
    


export default class DemoCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows:true,
      slidesToScroll: 1,
      className:'slides' ,
     
    };
    return (
        <div>
        <Slider {...settings}>
                  
         {photos.map((photo) => { 
              return(   
             <div>
             <img   src={photo.url} alt=""/>
             </div>
              ) })}
        </Slider>
        </div>
    );
  }
}