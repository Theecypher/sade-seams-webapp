"use client";

import { productDetailData } from "@/app/data/productDetail";
import { Bus, ChevronDown, ChevronUp, Shirt } from "lucide-react";
import { useState } from "react";

const ProductDescription = () => {
  const [toggleArrow, setToggleArrow] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  return (
    <div className="w-full">
      <div className="h-2 w-full text-[#ccc]"></div>

      <div>
        <div className="flex items-start gap-2">
          <Bus className="w-4 h-4" />

          <div>
            <p className="text-[12px] font-semibold capitalize">
              International standard
            </p>

            <p className="text-[12px] font-semibold">Free shopping USD $125+</p>
          </div>
        </div>
      </div>

      <div className="border border-black">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Shirt />
                <p>Product Details</p>
              </div>
              {/* {toggleArrow ? (
                <ChevronUp onClick={() => setToggleArrow(true)} />
              ) : (
                <ChevronDown onClick={() => setToggleArrow(true)} />
              )} */}
              <button onClick={() => setShowProductDetails((prev) => !prev)}>
                {showProductDetails ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {showProductDetails && (
              <div>
                {productDetailData.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
