import { NavLink } from "react-router-dom";
import logoWhite from "../../assets/HomePage/logo-white.png";
import logoBlack from "../../assets/HomePage/logo-dark.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScroll(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

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
      <nav className={`${scroll ? "shadow-lg bg-white" : "bg-none"}`}>
        <div className="flex items-center justify-between font-bold px-14 py-6">
          <div>
            {scroll ? (
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

            <div className="relative">
              <MdOutlineShoppingCart className="text-hover text-3xl cursor-pointer" />
              <span className="absolute bg-primary text-white rounded-full px-2 -top-2 -right-2 flex justify-center items-center text-sm">
                0
              </span>
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
