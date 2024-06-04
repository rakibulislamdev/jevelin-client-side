import { useEffect } from "react";
import "./AboutOurWatches.css";
import AboutSwiper from "./AboutSwiper/AboutSwiper";

const AboutOurWatches = () => {
  // bg scroll
  useEffect(() => {
    const handleScroll = () => {
      const bgDiv = document.getElementById("bg-div");
      if (window.scrollY < 300) {
        bgDiv.style.backgroundPosition = `2px ${-window.scrollY * 0.7}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full h-full">
      <div
        id="bg-div"
        className="bg-img bg-fixed bg-cover bg-center bg-no-repeat w-full h-full"
      >
        <div className="text-center pt-48 xl:pb-36 pb-16">
          <h4 className="font-bold text-grayLight text-base">
            ABOUT OUR WATCHES
          </h4>
          <h3 className="font-extrabold text-5xl text-darkLight mt-5 leading-tight">
            <span className="text-primary">New</span>,
            <span className="text-primary">Improved</span> Design <br /> and
            Performance
          </h3>
          <p className="text-darkLight w-1/2 mx-auto mt-10 leading-loose text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            vitae odales lectus, non ultrices nisi. In varius, leo non gravida.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-12 pb-10">
        <AboutSwiper />
        </div>
      </div>
    </section>
  );
};

export default AboutOurWatches;
