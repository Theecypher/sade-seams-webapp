import Image from "next/image";
import OffSale from "./offSale";

const Hero = () => {
  return (
    <div>
      <div className="hero mt-2 flex flex-col md:flex-row justify-between px-4 items-center relative">
        {/* <div className="text-center flex flex-col ">
          <h1 className="text-blue-950 text-base">Buy Now, Get One</h1>
          <p className="text-blue-950 font-semibold uppercase text-[30px]">
            FREE JEANS
          </p>
          <p className="text-white text-sm">[USE CODE: DENIM]</p>
        </div>

        <div className="absolute bottom-5 ">
          <button className="capitalize underline text-black">shop now</button>
        </div> */}

        <div className="flex flex-col text-white">
          <p className="md:text-[6rem] ">40% off</p>
          <p className="text-3xl md:text-[6rem]">Everything</p>
        </div>
      </div>

      {/* <OffSale layoutClassName="-mt-[20px]" title="Today only $10 dress" description="shop now" className="flex-row" /> */}
    </div>
  );
};

export default Hero;
