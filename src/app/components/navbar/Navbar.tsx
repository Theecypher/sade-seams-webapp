'use client'

import Image, { ImageLoaderProps } from "next/image";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
//   const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
//     return `/assets/novalogo.png/${src}?w=${width}&q=${quality || 75}`;
//   };

//   const imageStyle = {
//     borderRadius: "50%",
//     border: "1px solid #fff",
//   };

  return (
    <div className="flex justify-between bg-white items-center px-5">
      <div className="flex gap-5 items-center">
        <Image alt="logo" src="/assets/novalogo.png" 
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 1000px, 500px"
        width={130} 
        height={170} 
        />

        <div className="hidden lg:flex">
          {/* Categories of clothes/shoes */}
          <ul className="flex list-none gap-5 text-black">
            <li className="list-none">
              <Link href={"/"}>Basic Tops</Link>
            </li>
            <li className="list-none">
              <Link href={"/"}>Gowns</Link>
            </li>
            <li className="list-none">
              <Link href={"/"}>Palazzo</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 ">
        <Search color="black" />
        <User color="black" />
        <ShoppingBag color="black" />
        <Menu color="black" />
        <X color="black" className="hidden" />
      </div>
    </div>
  );
};

export default Navbar;
