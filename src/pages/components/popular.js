"use strict";
import Image from "next/image";

export default function Popular() {
  return (
    <div className="flex justify-between w-full col-span-2 tablet:flex-col ">
      <div className="flex w-[340px] tablet:w-full">
        <Image
          src="/images/image-retro-pcs.jpg"
          width={1000}
          height={1000}
          alt="Retro pc"
          className="w-24"
        />
        <div className=" ml-4">
          <h1 className="text-Grayish-blue font-bold text-[30px]">01</h1>
          <h2 className="font-bold text-[20px]">Reviving Retro PCs</h2>
          <p className="text-[16px] text-Dark-grayish-blue">What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex w-[340px] tablet:mt-7 tablet:w-full">
        <Image
          src="/images/image-top-laptops.jpg"
          width={1000}
          height={1000}
          alt="Retro pc"
          className="w-24"
        />
        <div className=" ml-4">
          <h1 className="text-Grayish-blue font-bold text-[30px]">02</h1>
          <h2 className="font-bold text-[20px]">Top 10 Laptops of 2022</h2>
          <p className="text-[16px] text-Dark-grayish-blue">Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="flex w-[340px] tablet:mt-7 tablet:w-full">
        <Image
          src="/images/image-gaming-growth.jpg"
          width={1000}
          height={1000}
          alt="Retro pc"
          className="w-24"
        />
        <div className=" ml-4">
          <h1 className="text-Grayish-blue font-bold text-[30px]">03</h1>
          <h2 className="font-bold text-[20px]">The Growth of Gaming</h2>
          <p className="text-[16px] text-Dark-grayish-blue">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}
