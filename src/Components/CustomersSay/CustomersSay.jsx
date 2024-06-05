import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";

import customerOne from "../../assets/HomePage/customer-one.jpg";
import customerTwo from "../../assets/HomePage/customer-two.jpg";

import "./index.css";
import { useRef } from "react";
const CustomersSay = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <section className="customer-slider-bg-image">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 py-28">
        <div className="text-center">
          <h3 className="text-5xl font-black text-darkLight pb-20 leading-tight">
            What our <br /> customers say
          </h3>
        </div>

        <div className="customer-slider-container relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div>
              <div className="flex flex-col justify-center items-center gap-10">
                <img className="rounded-full" src={customerOne} alt="" />
                <p className="text-center text-lg text-grayLight lg:w-1/2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate unde ex atque dicta deserunt at.
                </p>
                <span className="text-primary font-extrabold">Maggie Wilson</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col justify-center items-center gap-10">
                <img className="rounded-full" src={customerTwo} alt="" />
                <p className="text-center text-lg text-grayLight lg:w-1/2">
                  Cupiditate unde ex atque dicta deserunt at. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.
                </p>
                <span className="text-primary font-extrabold">Ella Jonson</span>
              </div>
            </div>
          </Slider>

          <div>
            <button
              className="absolute top-11 xl:left-[480px] lg:left-80 md:left-52 left-12 transition xl:-translate-x-1/2 lg:-translate-x-0 md:-translate-x-0 -translate-y-1/2"
              onClick={previous}
            >
              <GrPrevious
                size={25}
                className="text-hover hover:text-white duration-200"
              />
            </button>
            <button
              className="absolute top-11 xl:right-[460px] lg:right-80 md:right-52 right-12 transition xl:-translate-x-1/2 lg:-translate-x-0 md:-translate-x-0 -translate-y-1/2"
              onClick={next}
            >
              <GrNext
                size={25}
                className="text-hover hover:text-white duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
