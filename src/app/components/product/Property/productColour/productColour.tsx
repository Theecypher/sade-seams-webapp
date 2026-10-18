"use client";

import { ProductColourData } from "@/app/data/ProductColour";
import { useState } from "react";

const ProductColour = () => {
  const [activeColourId, setActiveColourId] = useState(
    ProductColourData[0]?.id ?? "",
  );

  const activeColour = ProductColourData.find(
    (item) => item.id === activeColourId,
  );

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-sm">{activeColour?.colourText}</h2>
      <div className="flex gap-2.5">
        {ProductColourData.map((item) => (
          <button
            aria-pressed={activeColourId === item.id}
            key={item.id}
            onClick={() => setActiveColourId(item.id)}
            type="button"
            title={item.colourText}
            aria-label={item.colourText}
            className={`h-7 w-7 shrink-0 rounded-full border border-gray-300 ${
              activeColourId === item.id
                ? "ring-2 ring-black ring-offset-2"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: item.hex }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductColour;
