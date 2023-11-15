import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src="/images/image-web-3-desktop.jpg"
        alt="Game"
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="flex justify-between mt-4 tablet:flex-col tablet:justify-start">
        <h1 className="w-2/5 h-[200px] text-[50px] font-bold leading-[1] tablet:w-full tablet:h-auto">The Bright Future of Web 3.0?</h1>
        <div className="w-2/5 h-[200px] flex flex-col items-start justify-between tablet:w-full tablet:h-auto tablet:mt-4">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="text-white bg-Soft-red p-[8px_50px] tablet:mt-6">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
