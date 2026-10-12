import { Search, Camera } from "lucide-react"

type NavSearchProps = {
  hasSearchImage?: boolean;
};


    // <div
    //     className={twMerge(
    //       "w-full md:w-1/2 bg-white flex flex-col items-center py-8 px-4",
    //       className
    //     )}
    //   ></div>

const NavSearch = ({ hasSearchImage }: NavSearchProps) => {
  return (
    <div className="w-full justify-center items-center flex">
      <div className="flex border items-center border-[#ccc] gap-1 rounded-[30px] px-5 w-full py-1.75 ">
        <Search color="#5b5b5b" opacity={80} />
        <input
          type="text"
          placeholder="Search within Women's Clothing."
          className="text-black outline-none border-none w-full text-[14px]"
        />

        {hasSearchImage && <Camera  width={25} height={25} className="" />}
      </div>
    </div>
  );
};

export default NavSearch;
