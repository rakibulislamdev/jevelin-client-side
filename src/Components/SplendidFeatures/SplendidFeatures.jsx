import SplendidFeaturesImg from "../../assets/HomePage/SplendidFeatures.jpg";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";

const SplendidFeatures = () => {
  return (
    <section className="my-56 max-w-7xl mx-auto px-5">
      <div className="flex lg:flex-row flex-col justify-around items-center gap-y-20">
        <div>
          <img className="lg:w-full w-96" src={SplendidFeaturesImg} alt="Splendid Features Image" />
        </div>

        <div>
          <div>
            <h4 className="text-sm font-bold text-grayLight">MEET WITH OUR</h4>
            <h3 className="text-5xl font-black text-darkLight mt-5 mb-24">Splendid Features</h3>
          </div>
          <div>
            <div className="flex items-center gap-8">
              <CiMicrophoneOn className="text-4xl -ml-2 text-hover"/>
              <span className="text-base font-extrabold text-darkLight">Voice Recognition</span>
            </div>
            <p className="text-base text-grayLight ml-[60px] mt-1">
              Lorem ipsum dolor sit amet, con <br />
            sectetur adipiscing elit. Mauris
            </p>
          </div>
          <div className="my-24">
            <div className="flex items-center gap-8">
              <IoIosPhonePortrait className="text-4xl -ml-2 text-hover"/>
              <span className="text-base font-extrabold text-darkLight">Connect with your phone</span>
            </div>
            <p className="text-base text-grayLight ml-[60px] mt-1">
              Lorem ipsum dolor sit amet, con <br />
            sectetur adipiscing elit. Mauris
            </p>
          </div>
          <div>
            <div className="flex items-center gap-8">
              <IoWifiOutline className="text-4xl -ml-2 text-hover rotate-45"/>
              <span className="text-base font-extrabold text-darkLight">Any task at hand</span>
            </div>
            <p className="text-base text-grayLight ml-[60px] mt-1">
              Lorem ipsum dolor sit amet, con <br />
            sectetur adipiscing elit. Mauris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplendidFeatures;
