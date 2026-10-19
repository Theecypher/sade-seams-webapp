"use client";

import Accordion from "@/app/components/shared/accordion/accordion";
import { productDetailData, whyYouLoveIt } from "@/app/data/productDetail";
import {
  Book,
  Bus,
  Check,
  ChevronDown,
  ChevronUp,
  CircleCheckBig,
  Info,
  Shirt,
} from "lucide-react";
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

      <div className="border border-[#E1E1E1] mt-4 rounded-xl px-2">
        <div className="border-b border-[#E1E1E1]">
          <Accordion
            icon={<Shirt className="text-[10px]" />}
            title="Product Details"
          >
            <div className="text-[11px] font-semibold px-15 flex flex-col gap-0.5">
              {productDetailData.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </div>
          </Accordion>
        </div>

        <div className="border-b border-[#E1E1E1]">
          <Accordion
            icon={<CircleCheckBig className="text-[10px]" />}
            title="Why Lou'll Love it"
          >
            <div>
              {whyYouLoveIt.map((item) => (
                <div
                  key={item.id}
                  className="flex border-b px-1 border-[#E1E1E1] py-2.5 gap-2"
                >
                  <Check className="text-base font-bold w-[5%]" />
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="font-bold text-[12px]">{item.text}</p>
                    <p className="text-[11px]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        <div className="border-b border-[#E1E1E1]">
          <Accordion icon={<Book />} title="Material">
            <p className="text-sm px-[20px]">100% polyester</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
