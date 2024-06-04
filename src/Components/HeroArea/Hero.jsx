import leftTopCircle from "../../assets/HomePage/circle-top-left.png";
import watch from "../../assets/HomePage/hero-watch.png";
import rightBottomCircle from "../../assets/HomePage/circle-bottom-right.png";

const Hero = () => {
  return (
    <section className="bg-dark h-screen overflow-hidden relative w-full mx-auto">
      <div>
        <img
          className="lg:w-[400px] md:w-[180px] w-[150px] absolute lg:-top-36 md:-top-16 -top-5 lg:-left-36 md:left-10 -left-10"
          src={leftTopCircle}
          alt=""
        />
      </div>

      <div>
        <div className="relative">
          <img
            className="lg:w-[900px] md:w-[450px] w-[400px] absolute lg:top-24 md:top-12 top-32 lg:-right-64 md:-right-24 -right-36"
            src={rightBottomCircle}
            alt=""
          />
        </div>

        <div className="absolute lg:top-14 top-72 lg:right-28 md:right-48 right-32">
          <img className="lg:w-[450px] md:w-[300px] w-[250px]" src={watch} alt="" />
        </div>
      </div>

      <div className="absolute lg:top-1/2 md:top-1/3 top-36 lg:left-1/3 transform lg:-translate-x-1/2 md:translate-x-3/4 translate-x-20 lg:-translate-y-1/2 -translate-y-1/4">
        <h1 className="text-white font-bold capitalize lg:text-6xl text-4xl">lifestyle <br /> smart <span className="text-hover">watch</span></h1>
        <h3 className="text-white uppercase font-bold text-sm lg:pt-14 pt-6">Technology of the future</h3>
        <p className="text-grayLight text-xs text lg:pt-5 pt-1">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.Dolorum, ex.</p>
      </div>
    </section>
  );
};

export default Hero;
