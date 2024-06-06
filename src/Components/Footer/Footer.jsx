import logo from "../../assets/HomePage/logo-white.png";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcJcb,
  FaLock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkLight px-5 lg:px-0">
      <div className="flex justify-evenly md:flex-row flex-col gap-5 gap-y-14 py-24">
        <div className="md:w-[25%]">
          <div>
            <img src={logo} alt="Brand Logo"/>
            <p className="text-grayLight mt-5 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id atque
              hic repellat. Reprehenderit, dolorem minima.
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-5">
            <FaCcVisa className="text-white text-4xl" />
            <FaCcMastercard className="text-white text-4xl" />
            <FaCcAmex className="text-white text-4xl" />
            <FaCcPaypal className="text-white text-4xl" />
            <FaCcJcb className="text-white text-4xl" />
          </div>

          <div className="flex items-center gap-2 mt-5">
            <FaLock className="text-grayLight text-xs" />
            <p className="text-grayLight text-xs">Secure online payment</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-5">BEST EXPERIENCE</h3>
          <div className="text-base space-y-2 text-grayLight">
            <h4>FAQ</h4>
            <h4>Shipment</h4>
            <h4>Returns</h4>
            <h4>Gift cards</h4>
            <h4>Policies</h4>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white mb-5">COMPANY</h3>
          <div className="text-base space-y-2 text-grayLight">
            <h4>About us</h4>
            <h4>Press</h4>
            <h4>Offices</h4>
            <h4>Affiliates</h4>
            <h4>Giveaway</h4>
          </div>
        </div>
      </div>

      <p className="text-grayLight text-center text-sm pb-10">
        Copyright © 2024 - Develop by Rakibul islam
      </p>
    </footer>
  );
};

export default Footer;
