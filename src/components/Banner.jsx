import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImagOne from "../images/slider/sliderImg_1.jpg";
import ImagTwo from "../images/slider/sliderImg_2.jpg";
import ImagThere from "../images/slider/sliderImg_3.jpg";
import ImagFour from "../images/slider/sliderImg_4.jpg";
export default function Banner() {
  return (
    <div  className=" relative">
      
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2300}
       
      >
        <div>
          <Image priority alt="imgbanneer" src={ImagOne} />
        </div>
        <div>
          <Image priority alt="imgbanneer" src={ImagTwo} />
        </div>
        <div>
          <Image  priority alt="imgbanneer" src={ImagThere} />
        </div>
        <div>
          <Image priority alt="imgbanneer" src={ImagFour} />
        </div>
      </Carousel>
      <div className=" w-full h-40  bg-gradient-to-t from-gray-200 absolute bottom-0 z-20"></div>
    </div>
  );
}
