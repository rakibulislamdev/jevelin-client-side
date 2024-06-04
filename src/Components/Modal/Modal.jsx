/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import './Modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ show, onClose, images, startIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  if (!show) {
    return null;
  }

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startIndex,
    waitForAnimate: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 z-20">
      <div className="h-screen flex justify-center items-center">
        <div className="slider-container lg:w-96 w-60">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="rounded-lg"
                  src={image.watch}
                  alt={`watch-${index + 1}`}
                />
              </div>
            ))}
          </Slider>
          <div className="text-center text-white mt-4">
            {`${currentIndex + 1} / ${images.length}`}
          </div>
        </div>

        <div
          onClick={onClose}
          className="absolute top-14 right-20 text-4xl text-grayLight p-4 rounded-full cursor-pointer hover:text-white duration-700 sm:hidden md:block"
        >
          <IoCloseCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default Modal;
