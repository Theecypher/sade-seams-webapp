import Image from "next/image";
import { trendData } from "../data/trend";
import { ArrowBigRight, ArrowRight, ChevronRight } from "lucide-react";

const TrendReport = () => {
  return (
    <section className="mt-8 md:mt-15 px-3 flex flex-col gap-10">
      <h5 className="font-bold text-2xl ">Trending Clothes</h5>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {trendData.map((item) => {
          return (
            <div className="flex flex-col w-full gap-1  " key={item.name}>
              {/* <Image alt=""  src={item.img} /> */}
              <img src={item.img} alt="" className="w-full" />
              <div className="flex justify-between items-center md:px-2">
                <p>{item.name}</p>
                <ChevronRight className="text-sm" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendReport;
