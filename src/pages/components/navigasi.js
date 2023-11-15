"use strict";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="flex justify-between items-center mb-5">
      <Image width={100} height={100} src="images/logo.svg" alt="logo" />
      <div
        className={`tablet:flex tablet:flex-col tablet:justify-between tablet:w-[30px] tablet:h-[20px] tablet:cursor-pointer tablet:z-50 ${isOpen ? "tablet:fixed right-5" : ""}`}
        onClick={toggleMenu}
      >
        <span
          className={`w-full h-1 bg-black ease-in duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
          }`}
        ></span>
        <span
          className={`w-full h-1 bg-black ease-in duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`w-full h-1 bg-black ease-in duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"
          }`}
        ></span>
      </div>
      <div
        className={`text-xl ${
          isOpen
            ? "tablet:fixed tablet:top-0 tablet:right-0 tablet:h-screen tablet:w-[60%] tablet:bg-white z-10"
            : "tablet:hidden"
        }`}
      >
        <div
          className={`flex justify-between w-[400px] text-xl ${
            isOpen
              ? "tablet:flex-col tablet:w-[60%] tablet:h-[200px] z-10 tablet:bg-white tablet:translate-y-20 tablet:ml-[20px]"
              : "tablet:hidden"
          }`}
        >
          <a className="hover:text-Soft-red" href="#Home">
            Home
          </a>
          <a className="hover:text-Soft-red" href="#New">
            New
          </a>
          <a className="hover:text-Soft-red" href="#Popular">
            Popular
          </a>
          <a className="hover:text-Soft-red" href="#">
            Trending
          </a>
          <a className="hover:text-Soft-red" href="#">
            Categories
          </a>
        </div>
      </div>
        <div
          className={`hidden ${
            isOpen
              ? "tablet:fixed tablet:flex tablet:w-[100%] tablet:h-full tablet:bg-black opacity-50 tablet:top-0 tablet:left-0"
              : "tablet:hidden"
          }`}
        ></div>
    </div>
  );
}
