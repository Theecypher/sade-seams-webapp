import Image from "next/image";
import OffSale from "./offSale";
import Link from "next/link";

const Hero = () => {
  return (
    // <div className="w-full">
      <div className="hero mt-2 flex flex-col text-white justify-center items-center relative w-full">

        <div className="flex w-full justify-between items-center px-2 md:px-6 lg:px-8 xl:px-10 mt-auto">
          <div className="flex flex-col text-white">
            <p className="text-[18px] uppercase md:text-[1.8rem] xl:text-[2.5rem] font-bold">40% off <br /> Everything</p>
           
          </div>
          <div className="flex flex-col leading-4">
            <p className="uppercase text-[12px] md:tracking-wide md:text-[14px] font-light">
              Friends & <br className="md:hidden" /> Family Events
            </p>
            <p className="uppercase hidden md:flex text-[12px] self-end">use code: MMA21</p>
          </div>
        </div>

        {/* the last div */}
        <div className="flex flex-col mt-auto items-center pb-4">
          <p className="uppercase md:hidden">use code: MMA21</p>
          <Link href="/" className="uppercase underline text-[#ccc]">
            shop now
          </Link>
          <p className="uppercase text-[#ccc] text-[10px] hidden md:flex mt-4">t&cs apply</p>
        </div>
      </div>
    // </div>
  );
};

export default Hero;
