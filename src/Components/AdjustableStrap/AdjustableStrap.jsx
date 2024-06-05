import mintGreenStrap from "../../assets/HomePage/MintGreen.jpg";

const AdjustableStrap = () => {
  return (
    <section className="bg-darkLight text-center py-24">
      <div className="max-w-7xl mx-auto lg:px-0 px-5">
        <h4 className="text-sm font-bold text-grayLight">ADJUSTABLE STRAPS</h4>
        <h3 className="text-5xl font-black text-white mt-5 mb-6 leading-tight">
          Choose the best <br /> color for your activity
        </h3>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 lg:py-28 py-16">
          {[1, 2, 3].map((card, index) => (
            <div key={index} className="relative">
              <img className="" src={mintGreenStrap} alt="Mint Green Strap" />
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                <p className="text-white text-sm mb-2 ">WRIST BAND</p>
                <h3 className="text-white lg:text-3xl text-xl font-bold mb-5">Mint Green</h3>
                <h4 className="text-white text-xl font-bold">$25.50</h4>
              </div>
            </div>
          ))}
        </div>

        <div>
            <button className="border-2 border-white rounded-full px-10 py-3 text-white font-bold hover:text-grayLight hover:border-grayLight duration-700">SEE MORE</button>
        </div>
      </div>
    </section>
  );
};

export default AdjustableStrap;
