import BestExperienceImg from "../../assets/HomePage/BestExperience.jpg";

const BestExperience = () => {
  return (
    <section className="my-56 max-w-7xl mx-auto px-5">
      <div className="flex lg:flex-row flex-col justify-around items-center gap-y-20">
        <div>
          <div>
            <h4 className="text-sm font-bold text-grayLight">
              NOW UPGRADED FOR
            </h4>
            <h3 className="text-5xl font-black text-darkLight mt-5 mb-24">
              Best Experience
            </h3>
          </div>

          <div>
            <div className="flex items-center gap-8">
              <span className="text-base font-extrabold text-darkLight">
                + Increased storage
              </span>
            </div>
            <p className="text-base text-grayLight mt-1">
              Lorem ipsum dolor sit amet, con <br />
              sectetur adipiscing elit. Mauris
            </p>

            {/* progress bar */}
            <div>
              <span className="mb-2 text-right font-bold text-darkLight block">
                30%
              </span>
              <div className="w-full bg-grayLight h-1 rounded-full">
                <div
                  className="bg-primary h-1 rounded-full transition-all duration-1000 delay-1000 ease-in-out"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="my-24">
            <div className="flex items-center gap-8">
              <span className="text-base font-extrabold text-darkLight">
                + Battery life
              </span>
            </div>
            <p className="text-base text-grayLight mt-1">
              Lorem ipsum dolor sit amet, con <br />
              sectetur adipiscing elit. Mauris
            </p>

            {/* progress bar */}
            <div>
              <span className="mb-2 text-right font-bold text-darkLight block">
                80%
              </span>
              <div className="w-full bg-grayLight h-1 rounded-full">
                <div
                  className="bg-primary h-1 rounded-full transition-all duration-1000 delay-1000 ease-in-out"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-8">
              <span className="text-base font-extrabold text-darkLight">
                + Display surface
              </span>
            </div>
            <p className="text-base text-grayLight mt-1">
              Lorem ipsum dolor sit amet, con <br />
              sectetur adipiscing elit. Mauris
            </p>

            {/* progress bar */}
            <div>
              <span className="mb-2 text-right font-bold text-darkLight block">
                60%
              </span>
              <div className="w-full bg-grayLight h-1 rounded-full">
                <div
                  className="bg-primary h-1 rounded-full transition-all duration-1000 delay-1000 ease-in-out"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            className="xl:w-full w-96"
            src={BestExperienceImg}
            alt="Splendid Features Image"
          />
        </div>
      </div>
    </section>
  );
};

export default BestExperience;
