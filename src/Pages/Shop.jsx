import { useEffect, useState } from "react";
import CharcoalBlack from "../assets/shop/CharcoalBlack.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";



const data =
[
  {
    "color": "charcoal black",
    "itemName": "body",
    "price": "50",
    "date": "2023-06-01"
  },
  {
    "color": "golden-sunset",
    "itemName": "strap",
    "price": "25",
    "date": "2023-06-02"
  },
  {
    "color": "light-pink",
    "itemName": "body",
    "price": "45",
    "date": "2023-06-03"
  },
  {
    "color": "mint-green",
    "itemName": "strap",
    "price": "18",
    "date": "2023-06-04"
  },
  {
    "color": "pink-lemonade",
    "itemName": "body",
    "price": "50",
    "date": "2023-06-05"
  },
  {
    "color": "purple-berry",
    "itemName": "strap",
    "price": "22",
    "date": "2023-06-06"
  },
  {
    "color": "sky-blue",
    "itemName": "body",
    "price": "47",
    "date": "2023-06-07"
  },
  {
    "color": "snow-white",
    "itemName": "strap",
    "price": "23",
    "date": "2023-06-08"
  }
]



const Shop = () => {

  const [productsData, setProductsData] = useState(data)
  const [inputSortValue, setInputSortValue] = useState("default")

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setInputSortValue(sortValue);
  
    let sorting = [...productsData];
    if (sortValue === "low-price") {
      sorting.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-price") {
      sorting.sort((a, b) => b.price - a.price);
    }  else if (sortValue === "sort-latest") {
      sorting.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  
    setProductsData(sorting);
  console.log(sorting);
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
          <select onChange={handleSort}
          value={inputSortValue}
            className="border border-grayLight rounded-full px-5 py-3 focus:outline-none text-grayLight block"
          >
            <option>Default</option>
            <option value="Sort by popularity">Sort by popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="sort-latest">Sort by latest</option>
            <option value="low-price">
              Sort by price:low to high
            </option>
            <option value="high-price">
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
          {productsData.map((product, index) => (
            <div className="pt-12 cursor-pointer">
              <img src={CharcoalBlack} alt="" />

              <p className="font-extrabold text-darkLight pt-7 capitalize">
                {product.color}
              </p>
              <span className="text-grayLight block pt-2 uppercase">
                {product.itemName}
              </span>

              <div className="flex items-center gap-5">
                <div className="border border-[#EBEBEB] w-full"></div>
                <div className="text-grayLight text-xl bg-[#EBEBEB] hover:text-white hover:bg-primary duration-300 p-3 rounded-full">
                  <MdOutlineShoppingCart />
                </div>
              </div>

              <span className="font-bold text-darkLight block">
                £{product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
