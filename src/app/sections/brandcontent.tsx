import { BrandData } from "./brand/brand";
import formatAmount from "../utils/formatAmoount";

const BrandContent = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-0.5 gap-y-7">
      {BrandData.map((item) => {
        return (
          <div className="">
            <img src={item.img} className="aspect=" alt="" />
            <div>
              <p className="text-[12px]">{item.name}</p>
              <p className="font-bold">{formatAmount(Number(item.price))}</p>
              <p className="text-[#a30f34] text-[12px] font-bold">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandContent;
