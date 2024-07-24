import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import useProducts from "../Hooks/useProducts";
import usePublic from "../Hooks/usePublic";
import toast from "react-hot-toast";
import useCartsData from "../Hooks/useCartsData";

const Shop = () => {
  const [allProducts, isLoading] = useProducts();
  const [, , refetch] = useCartsData()

  const [productsData, setProductsData] = useState(allProducts);
  const [inputSortValue, setInputSortValue] = useState("default");

  useEffect(() => {
    if (allProducts.length > 0) {
      const savedSortValue = localStorage.getItem("sortValue") || "default";
      setInputSortValue(savedSortValue);

      let sortedProducts = [...allProducts];

      if (savedSortValue === "low-price") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (savedSortValue === "high-price") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortedProducts === "sort-latest") {
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      setProductsData(sortedProducts);
    }
  }, [allProducts]);

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setInputSortValue(sortValue);
    localStorage.setItem("sortValue", sortValue);

    let sorting = [...allProducts];
    if (sortValue === "low-price") {
      sorting.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-price") {
      sorting.sort((a, b) => b.price - a.price);
    } else if (sortValue === "sort-latest") {
      sorting.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setProductsData(sorting);
  };

  const publicAxios = usePublic();
  const handleCartData = async (product) => {
    const { _id: id, image, itemName, price, rating, color } = product;

    const productCart = { image, itemName, price, rating, color, quantity: 1 };
    try {
      const res = await publicAxios.put(`/cart/${id}`, productCart);
      if (res.status === 200) {
        refetch()
        toast.custom(
          <div className="bg-white rounded-lg p-5">
            {" "}
            <b className="font-bold text-grayLight capitalize">
              {productCart.color}
            </b>{" "}
            has been added to the cart.{" "}
            <b className="text-primary capitalize">View Cart</b>{" "}
          </div>
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
            onChange={handleSort}
            value={inputSortValue}
            className="border appearance-none border-grayLight rounded-full px-5 py-3 focus:outline-none text-grayLight block"
          >
            <option value="default">Default</option>
            <option value="Sort by popularity">Sort by popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="sort-latest">Sort by latest</option>
            <option value="low-price">Sort by price: low to high</option>
            <option value="high-price">Sort by price: low to high</option>
          </select>

          <div>
            <p className="text-grayLight">
              Showing all <span className="font-bold">8</span> results
            </p>
          </div>
        </div>

        {/* cards */}

        {isLoading ? (
          <h3>Loading...........</h3>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-7">
            {productsData?.map((product, index) => (
              <div key={index} className="pt-12 cursor-pointer">
                <img src={product.image} alt="product image" />

                <p className="font-extrabold text-darkLight pt-7 capitalize">
                  {product.color}
                </p>
                <span className="text-grayLight block pt-2 uppercase">
                  {product.itemName}
                </span>

                <div className="flex items-center gap-5">
                  <div className="border border-[#EBEBEB] w-full"></div>
                  <div
                    onClick={() => handleCartData(product)}
                    className="text-grayLight text-xl bg-[#EBEBEB] hover:text-white hover:bg-primary duration-300 p-3 rounded-full"
                  >
                    <MdOutlineShoppingCart />
                  </div>
                </div>

                <span className="font-bold text-darkLight block">
                  £{product.price}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
