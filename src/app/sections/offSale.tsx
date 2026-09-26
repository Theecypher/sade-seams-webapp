import Link from "next/link";

const OffSale = () => {
    return ( 
        <div className="p-2 bg-[#550000] w-full my-3">
            <div className="p-5 flex justify-center items-center font-bold gap-2 md:p-13 lg:p-20  text-white flex-col lg:gap-5">
                <p className="font-bold text-xl md:text-[4rem]">60-80% OFF SALE</p>
                <p>
                    <Link className="text-[12px] text-[#ccc] underline lg:text-xl " href="#">SHOP NOW</Link>
                </p>
            </div>
        </div>
     );
}
 
export default OffSale;