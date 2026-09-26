import Image from "next/image";
import Hero from "./sections/hero";
import TrendReport from "./sections/trend";
import BrandSection from "./sections/brand";
import OffSale from "./sections/offSale";


export default function Home() {
  return (
    <div>
      <Hero />
      <TrendReport />
      <OffSale />
      <BrandSection />
    </div>
  );
}
