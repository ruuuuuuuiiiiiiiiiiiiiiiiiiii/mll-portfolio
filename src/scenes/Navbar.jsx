import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import DarkIcon from "../images/mode/icons8-summer-100.png";
import LightIcon from "../images/mode/icons8-moon-and-stars-100.png";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      // onClick={() => setSelectedPage(lowerCasePage)} // fixes issue on DOT group
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-blue";

  return (
    <nav className={`${navbarBackground} z-40 w-screen fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-pacifico text-4xl font-bold">mll</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-bebas_neue text-2xl font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link 
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link 
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* DRK/LGHT Mode */}
            {/* <div className="vl-item"></div> */}
            {/* DRK/LGHT Icon */}
            {/* <div className="flex justify-center -ml-10">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="transition duration-1000"
              >
                <img className="h-[25px] w-[25px]" alt={isDarkMode ? "dark-icon" : "light-icon"} src={isDarkMode ? DarkIcon : LightIcon} />
              </button>
            </div> */}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* Mobile Menu Popup */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="absolute inset-y-0 right-0 bottom-0 min-h-screen bg-blue w-[300px] ">
            {/* Close Icon */}
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] font-bebas_neue text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link 
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {/* DRK/LGHT Mode */}
            {/* <div className="hl-item"></div> */}
            {/* DRK/LGHT Icon */}
            {/* <div className="flex justify-center mb-[20px] mr-10">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="transition duration-1000"
              >
                <img className="h-[25px] w-[25px]" alt={isDarkMode ? "dark-icon" : "light-icon"} src={isDarkMode ? DarkIcon : LightIcon} />
              </button>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
