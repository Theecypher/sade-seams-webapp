import Link from "next/link";
import { twMerge } from "tailwind-merge";

type offSaleProps = {
  title?: string;
  className?: string;
  layoutClassName?: string;
  description?: string;
};

const OffSale = ({
  title = "60-80% OFF SALE",
  description = "SHOP NOW",
  className,
  layoutClassName,
}: offSaleProps) => {
  return (
    <div className={twMerge("p-2 bg-[#550000] w-full my-3", layoutClassName)}>
      <div
        className={twMerge(
          "p-5 flex justify-center items-center font-bold gap-2 md:p-13 lg:p-20  text-white flex-col lg:gap-5",
          className,
        )}
      >
        <p className="font-bold text-xl md:text-[4rem]">{title}</p>
        <p>
          <Link
            className="text-[12px] text-[#ccc] underline lg:text-xl "
            href="#"
          >
            {description}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OffSale;
