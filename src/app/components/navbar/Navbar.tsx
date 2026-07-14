"use client";

import Image, { ImageLoaderProps } from "next/image";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import NavSearch from "../ui/Search";

const Navbar = () => {

  return (
    <div className="flex justify-between bg-white items-center px-3 md:px-10">
      <div className="flex gap-5 items-center">
        <Image
          alt="logo"
          src="/assets/novalogo.png"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 1000px, 500px"
          loading="eager"
          width={120}
          height={170}
          className="md:hidden"
        />
        <Image
          alt="logo"
          src="/assets/novalogo.png"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 1000px, 500px"
          loading="eager"
          width={130}
          height={200}
          className="md:flex hidden"
        />

        {/* <img className="w-[130px] h-37.5 md:h-[200px]  md:w-[180px]  " alt="logo" src="/assets/novalogo.png"  /> */}

        <div className="hidden lg:flex">
          {/* Categories of clothes/shoes */}
          <ul className="flex list-none gap-5 text-black">
            <li className="list-none">
              <Link href={"/"}>BasicTops</Link>
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

      <div className="flex gap-5">
        <div className="hidden lg:flex">
          <NavSearch />
        </div>
        <div className="flex items-center gap-5 ">
          {/* <Search color="black" /> */}
          <User color="black" />
          <ShoppingBag color="black" />
          <Menu color="black" />
          <X color="black" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
