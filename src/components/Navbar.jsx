import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleMobileNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4">anix</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#home">Home</a>
        </li>
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#skills">Skills</a>
        </li>
        <li className="p-5">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div onClick={handleMobileNav} className="block md:hidden pointer">
        <AiOutlineMenu size={20} className={nav ? "hidden" : "block"} />
      </div>
      <div
        className={
          nav
            ? "z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%] top-0  h-full ease-in-out duration-500"
        }
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold primary-color m-4">anix</h1>
          <div onClick={handleMobileNav} className="text-gray-500 m-4 pointer">
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#home" onClick={() => setNav(!nav)}>
              Home
            </a>
          </li>
          <li className="p-2">
            <a href="#about" onClick={() => setNav(!nav)}>
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#skills" onClick={() => setNav(!nav)}>
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#projects" onClick={() => setNav(!nav)}>
              Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={() => setNav(!nav)}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
