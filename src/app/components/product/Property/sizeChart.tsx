import { SizeChartData } from "@/app/data/size";

const SizeRuler = () => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <div className="flex gap-1  ">
        <p className="font-bold text-sm">Size </p>
        <p className="text-sm leading-none font-semibold">|</p>
        <p className="underline text-[13px] font-semibold">
          View Size Guide
        </p>
      </div>

      <div className="flex gap-2 flex-wrap pr-10 ">
        {SizeChartData.map((item) => (
          <div className="flex p-1 border border-[#ccc] hover:border-black px-3 ">
            <button className="text-sm uppercase ">{item.size}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeRuler;
