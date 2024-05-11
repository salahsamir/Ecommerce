import React, { useEffect, useState } from 'react'
import style from './MainSlider.module.css'
import axios from 'axios'
import Slider from "react-slick";
import sliders1 from "../../assets/images/slider-image-1.jpeg"
import sliders2 from "../../assets/images/slider-image-3.jpeg"
import sliders3 from "../../assets/images/slider-image-2.jpeg"
import banner from "../../assets/images/blog-img-1.jpeg"
import banner1 from "../../assets/images/blog-img-2.jpeg"
import banner2 from "../../assets/images/slider-2.jpeg"






export default function MainSlider() {
  // let[category,setCategory]=useState(null)
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
   <>
   <div className="row my-5 py-1">
    <div className="col-md-8">
   
      <div>
        <img className='w-100' src={sliders1} alt="" />
        
      </div>
   
    </div>
    <div className="col-md-4 mt-5">
      <div className="">
        <h2 className='fw-bold text-main mb-2'>E-Commerce</h2>
        <p>Welcome to [Your E-commerce Website Name], your one-stop destination for all your shopping needs! Explore an extensive range of products from the comfort of your home, with just a click of a button. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we've got you covered.</p>
      

      </div>
    </div>
   </div>
   
   
   </>
  )
}

