import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiZoomIn } from "react-icons/ci";
import watchOne from "../../../assets/HomePage/watch-1.jpg";
import watchTwo from "../../../assets/HomePage/watch-2.jpg";
import watchThree from "../../../assets/HomePage/watch-3.jpg";
import watchFour from "../../../assets/HomePage/watch-4.jpg";
import watchFive from "../../../assets/HomePage/watch-5.jpg";
import watchSix from "../../../assets/HomePage/watch-6.jpg";
import watchSeven from "../../../assets/HomePage/watch-7.jpg";
import watchEight from "../../../assets/HomePage/watch-8.jpg";
import Modal from "../../Modal/Modal";
import { useState } from "react";

import './index.css'

const watchLists = [
  { watch: watchOne },
  { watch: watchTwo },
  { watch: watchThree },
  { watch: watchFour },
  { watch: watchFive },
  { watch: watchSix },
  { watch: watchSeven },
  { watch: watchEight },
];

const AboutSwiper = () => {
const [showModal, setShowModal] = useState(false)
const [images, setImages] = useState([])
const [startIndex, setStartIndex] = useState(0);

const toggleModal = (image = [], index = 0) => {
  setShowModal(!showModal)
  setImages(image)
  setStartIndex(index)
}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {watchLists.map((watch, index) => (
          <div onClick={() => toggleModal(watchLists, index)} key={index} className="relative group overflow-hidden">
            <img className="group-hover:scale-125 transition duration-700" src={watch.watch} alt="watches" />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary opacity-80 hidden cursor-pointer group-hover:block transition-all duration-700"></div>
            <div className="absolute text-3xl shadow-sm text-darkLight bg-white p-4 cursor-pointer rounded-full top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/2 transition-all duration-700">
              <CiZoomIn />
            </div>
          </div>
        ))}
      </Slider>

      <Modal show={showModal} images={images} startIndex={startIndex} onClose={() => toggleModal()}/>
    </div>
  );
};

export default AboutSwiper;
