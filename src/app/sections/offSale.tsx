import Link from "next/link";

const OffSale = () => {
    return ( 
        <div className="p-2 bg-[#550000] w-full my-3">
            <div className="p-5 flex justify-center items-center font-bold gap-2  text-white flex-col">
                <p className="font-bold text-xl">60-80% OFF SALE</p>
                <p>
                    <Link className="text-[12px] underline" href="#">SHOP NOW</Link>
                </p>
            </div>
        </div>
     );
}
 
export default OffSale;