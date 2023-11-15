"use strict";
import { useState } from "react";

export default function New() {
  const [isOpen, setIsOpen] = useState(false);

  const setActive = (a) => {
    if (a === "a") {
      setIsOpen("a");
    } else if (a === "b") {
      setIsOpen("b");
    } else if (a === "c") {
      setIsOpen("c");
    }
  };
  const setDeactive = () => {
    setIsOpen(false);
    console.log(b)
  };

  return (
    <div className="w-full h-full tablet:h-[440px] bg-Very-dark-blue text-white p-7">
      <h1 className="text-Soft-orange text-[40px]">New</h1>
      <div className="h-[80%] flex flex-col justify-around tablet:h-[90%]">
        <div
          onMouseOver={() => setActive("a")}
          onMouseOut={setDeactive}
        >
          <h1
            className={`text-[25px] mobile:text-[16px] ${
              isOpen === "a" ? "text-Soft-orange" : "text-white"
            }`}
          >
            Hydrogen VS Electric Cars
          </h1>
          <p className="text-[16px] mobile:text-[14px] text-Grayish-blue">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div
          onMouseOver={() => setActive("b")}
          onMouseOut={setDeactive}
        >
          <h1
            className={`text-[25px] mobile:text-[16px] ${
              isOpen === "b" ? "text-Soft-orange" : "text-white"
            }`}
          >
            The Downsides of AI Artistry
          </h1>
          <p className="text-[16px] mobile:text-[14px] text-Grayish-blue">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div
          onMouseOver={() => setActive("c")}
          onMouseOut={setDeactive}
        >
          <h1
            className={`text-[25px] mobile:text-[16px] ${
              isOpen === "c" ? "text-Soft-orange" : "text-white"
            }`}
          >
            Is VC Funding Drying Up?
          </h1>
          <p className="text-[16px] mobile:text-[14px] text-Grayish-blue">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
}
