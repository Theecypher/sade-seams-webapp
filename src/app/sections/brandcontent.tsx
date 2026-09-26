import { BrandData } from "./brand/brand";
import formatAmount from "../utils/formatAmoount";
import img7 from "/assets/icons/add-to-cart.png";

const BrandContent = () => {
  return (
    <div className="w-full grid grid-cols-2 min-[989px]:grid-cols-3 min-[1200px]:grid-cols-4  gap-x-0.5 md:gap-1.5 gap-y-7 md:gap-y-5">
      {BrandData.map((item) => {
        return (
          <div>
            <div className="flex flex-col relative">
              <img
                src={item.img}
                className="w-full aspect-3/4 object-cover"
                alt=""
              />

              <div className="p-2 md:hidden rounded-full bg-white absolute bottom-2 right-2 md:p-0">
                <img
                  src="/assets/icons/add-to-cart.png"
                  className="w-4 h-4 "
                  alt=""
                />
              </div>
            </div>
            <div className="px-2 md:px-0">
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
