import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero mt-1.5 flex flex-col justify-center items-center relative">
      <div className="text-center flex flex-col ">
        <h1 className="text-blue-950 text-base">Buy Now, Get One</h1>
        <p className="text-blue-950 font-semibold uppercase text-[30px]">
          FREE JEANS
        </p>
        <p className="text-white text-sm">[USE CODE: DENIM]</p>
      </div>

      {/* how do i make this div be at the end of the div, it is not working */}
      <div className="absolute bottom-5 ">
        <button className="capitalize underline text-black">shop now</button>
      </div>
    </div>
  );
};

export default Hero;
