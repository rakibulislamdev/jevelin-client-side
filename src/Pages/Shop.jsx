import CharcoalBlack from "../assets/shop/CharcoalBlack.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
const Shop = () => {
  return (
    <>
      <div className="bg-[#EBEBEB] mt-24 py-10">
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
          <h3 className="text-center text-2xl font-bold text-darkLight">
            Shop
          </h3>
          <p className="text-right pt-5 text-grayLight">
            Home > <span className="font-bold">product</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-14">
        <div className="flex justify-between md:flex-row flex-col-reverse items-center xl:px-0 px-6 gap-5">
          <select
            className="border border-grayLight rounded-full px-5 py-3 focus:outline-none text-grayLight block"
            name=""
            id=""
          >
            <option selected>Default</option>
            <option value="Sort by popularity">Sort by popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="Sort by latest">Sort by latest</option>
            <option value="Sort by price:low to high">
              Sort by price:low to high
            </option>
            <option value="Sort by price:high to low">
              Sort by price:low to high
            </option>
          </select>

          <div>
            <p className="text-grayLight">
              Showing all <span className="font-bold">8</span> results
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-7">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
            <div className="pt-12 cursor-pointer">
              <img src={CharcoalBlack} alt="" />

              <p className="font-extrabold text-darkLight pt-7">
                Charcoal Black
              </p>
              <span className="text-grayLight block pt-2">BODY</span>

              <div className="flex items-center gap-5">
                <div className="border border-[#EBEBEB] w-full"></div>
                <div className="text-grayLight text-xl bg-[#EBEBEB] hover:text-white hover:bg-primary duration-300 p-3 rounded-full">
                  <MdOutlineShoppingCart />
                </div>
              </div>

              <span className="font-bold text-darkLight block">£42.00</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
