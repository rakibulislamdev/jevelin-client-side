import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logoWhite from "../../assets/HomePage/logo-white.png";
import logoBlack from "../../assets/HomePage/logo-dark.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import useCartsData from "../../Hooks/useCartsData";
import { TiDelete } from "react-icons/ti";
import usePublic from "../../Hooks/usePublic";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [cartHover, setCartHover] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    setCartHover(true);
  };

  const handleMouseLeave = () => {
    setCartHover(false);
  };

  const cartOpen = () => {
    setCartHover(true);
  };
  const cartClose = () => {
    setCartHover(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScroll(offset > 0);
    };

    setCurrentPath(location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/gallery", name: "Gallery" },
    { path: "/features", name: "Features" },
    { path: "/reviews", name: "Reviews" },
    { path: "/shop", name: "Shop" },
  ];

  const publicAxios = usePublic()
  const [cartsData, , refetch] = useCartsData();
  

  const handleDelete = async (id) => {
    try {
    const res = await publicAxios.delete(`/cart/${id}`)
    refetch()
    } catch (error) {
      console.log(error.message)
    }
  }

  const navList = (
    <>
      {navLinks.map((navLink, index) => (
        <div
          key={index}
          className={
            navLink.name === "Home"
              ? "lg:border-none"
              : "border-t border-white lg:border-none pt-5 lg:pt-0"
          }
        >
          <NavLink
            to={navLink.path}
            className={({ isActive }) =>
              isActive
                ? "hover:text-grayLight over:duration-500 hover:underline"
                : "hover:text-grayLight hover:duration-500 hover:underline"
            }
          >
            {navLink.name}
          </NavLink>
        </div>
      ))}
    </>
  );

  return (
    <header className="w-full fixed mx-auto top-0 z-10">
      <nav
        className={`${
          scroll
            ? "shadow-lg bg-white"
            : currentPath === "/shop"
            ? "bg-white"
            : "bg-none"
        }`}
      >
        <div className="flex items-center justify-between font-bold px-14 py-6">
          <div>
            {scroll ? (
              <img src={logoBlack} alt="logo" />
            ) : currentPath === "/shop" ? (
              <img src={logoBlack} alt="logo" />
            ) : (
              <img src={logoWhite} alt="logo" />
            )}
          </div>

          {/* desktop nav */}
          {scroll ? (
            <div className="lg:flex justify-center items-center gap-10 hidden text-sm text-darkLight">
              {navList}
            </div>
          ) : currentPath === "/shop" ? (
            <div className="lg:flex justify-center items-center gap-10 hidden text-sm text-darkLight">
              {navList}
            </div>
          ) : (
            <div className="lg:flex justify-center items-center gap-10 hidden text-sm text-white">
              {navList}
            </div>
          )}

          {/* mobile nav */}
          <div
            onClick={() => setOpenMenu(false)}
            className={`${
              openMenu
                ? "transform -translate-y-[700px] duration-1000 -z-10"
                : " transform -translate-y-0 duration-1000 -z-10"
            } w-full absolute flex flex-col gap-5 top-[78px] right-0 h-screen bg-darkLight px-5 py-6 lg:hidden font-extralight cursor-pointer text-white`}
          >
            {navList}

            {/* button */}
            <button className="bg-primary text-white font-bold text-sm uppercase rounded-full px-8 py-3  hover:underline hover:bg-hover duration-500 w-2/5">
              Buy Now
            </button>
          </div>

          <div className="flex items-center gap-4">
            {/* hamburger */}
            <div
              className="text-hover text-3xl z-30 lg:hidden block cursor-pointer"
              onClick={toggleMenu}
            >
              {openMenu ? <CgMenuRight /> : <IoClose />}
            </div>

            <div>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/cart">
                  <MdOutlineShoppingCart className="text-hover text-3xl cursor-pointer" />
                </Link>
                <span className="absolute bg-primary text-white rounded-full px-2 -top-2 -right-2 flex justify-center items-center text-sm">
                  0
                </span>
              </div>

              {/* cart hover */}
              {cartHover && (
                <div
                  onMouseEnter={cartOpen}
                  onMouseLeave={cartClose}
                  className="bg-darkLight w-96 absolute top-[62px] right-[175px] animate-slideInFromTop transition-all ease-in-out duration-500"
                >
                  {/* cards */}
                  {cartsData.map((cart, _id) => (
                    <div key={_id} className="flex gap-20 p-5">
                      <div className="w-20">
                      <img className="w-20" src={cart.image} alt="" />
                      </div>
                      <div>
                        <div className="flex items-center text-white">
                          <p className="capitalize text-left">{cart.color}</p>
                          <TiDelete onClick={() => handleDelete(cart._id)} className="text-xl ml-10" />
                        </div>
                        <div className="flex items-center text-white">
                          <p className="text-sm font-thin">{cart.quantity} *</p>
                          <p className="text-primary">£{cart.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="text-white border-t border-b border-grayLight mt-7 p-5 text-center">
                    <p>SUBTOTAL: £25.50</p>
                  </div>
                  <div className="text-white flex justify-center gap-5">
                    <div className="flex items-center justify-center gap-2 pr-10 py-5 border-r border-link">
                      <FaEye />
                      <p>View Cart</p>
                    </div>
                    <div className="flex items-center gap-2 pl-5">
                      <FaRegCheckCircle />
                      <p>Check Out</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="bg-primary text-white text-sm uppercase rounded-full px-8 py-3 hidden lg:block hover:underline hover:bg-hover duration-500">
              Buy Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
