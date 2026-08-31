import { useState } from "react";
import { brandHeader } from "../data/brandheader";

const BrandHeader = () => {
    const [activeTab, setActiveTab] = useState(0);

    window.addEventListener("scroll", (e) => {
        e.
        
    })
  return (
    <div className="flex gap-2 overflow-x-scroll">
      {brandHeader.map((item, index) => {
        
        
        return <div className="flex" key={item.name}>
            <button onClick={() => setActiveTab(index)} className={`${(activeTab === index) ? "bg-black text-white" : "bg-white text-black" } text-nowrap py-2 px-3 border-[#ccc] rounded-3xl border`}>{item.name}</button>
        </div>;
      })}
    </div>
  );
};

export default BrandHeader;
