"use client";

import Image, { ImageLoaderProps } from "next/image";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import NavSearch from "../ui/Search";
import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const useIsMobile = (breakpoint = 768) => {};

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between bg-white items-center -my-1.5 md:my-0 px-3 md:px-10">
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

          <div className="hidden lg:flex">
            <NavbarItem />
          </div>
        </div>

        <div className="sidemenu h-full fixed">
          <ul>
            <li>
              <link href="*">NEW In</link>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <div className="hidden md:flex">
            <NavSearch />
          </div>
          <div className="flex items-center gap-5 ">
            {/* <Search color="black" /> */}
            <User color="black" />
            <ShoppingBag color="black" />
            {isOpenSideBar ? (
              <X color="black" />
            ) : (
              <Menu color="black" className="" />
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden w-full flex ">
        <NavbarItem />
      </div>

      <div className="md:hidden flex justify-center">
        <NavSearch />
      </div>
    </div>
  );
};

export default Navbar;
