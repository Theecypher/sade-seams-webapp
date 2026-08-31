import Image from "next/image";
import Hero from "./sections/hero";
import TrendReport from "./sections/trend";
import ShopByBrand from "./sections/brand";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrendReport />
      <ShopByBrand />
    </div>
  );
}
