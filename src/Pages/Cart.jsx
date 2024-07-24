import { SlCompass } from "react-icons/sl";

const Cart = () => {
  return (
    <>
      <div className="bg-[#FBFBFB] mt-24 py-10">
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
          <h3 className="text-center text-2xl font-bold text-darkLight">
            Shop
          </h3>
          <p className="text-right pt-5 text-grayLight">
            Home > <span className="font-bold">cart</span>
          </p>
        </div>
      </div>

      <div className="px-5">
        <div className="bg-[#FBFBFB] max-w-6xl mx-auto rounded-full p-2 my-10">
          <div className="flex justify-evenly items-center gap-5">
            <p className="font-bold text-hover">View Cart</p>
            <p className="font-bold text-hover">Checkout</p>
            <p className="font-bold text-hover">Done</p>
          </div>
        </div>

        <div className="bg-[#FBFBFB] max-w-6xl mx-auto my-20">
          <div className="p-6">
            <div className="flex items-center gap-5">
              <SlCompass className="text-2xl text-darkLight" />
              <span className="text-darkLight font-bold">CART IS EMPTY</span>
            </div>
            <p className="text-grayLight ml-[45px] py-2">
              Looks like there is no items in your cart.
            </p>
          </div>
        </div>

        <div className="text-[#e7e7e7] font-bold leading-none max-w-6xl mx-auto mb-10">
          <h5 className="lg:text-[56px] text-4xl">
            Your cart is <br />{" "}
            <span className="uppercase lg:text-[110px] text-6xl">
              CURRENTLY
            </span>{" "}
            <br />{" "}
            <span className="uppercase lg:text-[110px] text-6xl">EMPTY</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Cart;
