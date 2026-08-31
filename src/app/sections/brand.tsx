"use client"

import BrandHeader from "./brandheader";

const ShopByBrand = () => {
    return ( 
        <div className="mt-8 mx-5 flex flex-col gap-3 mb-4 overflow-hidden">
            <h4 className="text-[18px] font-black tracking-tight">SHOP THE LATEST</h4>
            <BrandHeader />
        </div>
     );
}
 
export default ShopByBrand;