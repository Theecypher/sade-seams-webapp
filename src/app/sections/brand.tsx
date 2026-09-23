"use client";

import BlackButton from "../components/button/blackButton";
import BrandContent from "./brandcontent";
import { BrandHeader } from "./brandheader";

const BrandSection = () => {
  return (
    <section className="mt-6 flex flex-col">
      <h2 className="font-black section-padding">SHOP THE LATEST</h2>

      <BrandHeader />

      <BrandContent />

      <div className="mt-8 mb-5 px-4 w-full">
        <BlackButton className="text-white w-full font-bold">
          Load More
        </BlackButton>
      </div>
    </section>
  );
};

export default BrandSection;
