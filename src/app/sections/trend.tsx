import Image from "next/image";
import { trendData } from "../data/trend";
import { ArrowBigRight, ArrowRight, ChevronRight } from "lucide-react";

const TrendReport = () => {
  return (
    <section className="mt-5 md:mt-15 md-p flex flex-col gap-2">
      <h5 className="font-black text-xl uppercase">The Trend report</h5>

      <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-4">
        {trendData.map((item) => {
          return (
            <div className="flex flex-col w-full gap-1  " key={item.name}>
              {/* <Image alt=""  src={item.img} /> */}
              <img src={item.img} alt="" className="w-full aspect-3/4 object-cover" />
              <div className="flex justify-center items-center md:px-2">
                <p className="text-sm font-semibold">{item.name}</p>
                <ChevronRight size={14} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendReport;
