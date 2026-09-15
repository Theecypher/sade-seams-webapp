import { useState } from "react";
import { brandHeader } from "../data/brandheader";

export const BrandHeader = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="sticky section-padding top-0 z-50 flex gap-2 py-2 overflow-x-auto scrollbar-none bg-white">
      {brandHeader.map((item, index) => (
        <div className="flex shrink-0" key={item.name}>
          <button
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index
                ? "bg-black text-white"
                : "bg-white text-black"
            } text-nowrap rounded-3xl border border-[#ccc] px-3 py-2 text-sm font-medium capitalize`}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
};
