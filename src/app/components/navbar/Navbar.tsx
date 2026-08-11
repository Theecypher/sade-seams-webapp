"use client";

import Image, { ImageLoaderProps } from "next/image";
import { ChevronRight, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import NavSearch from "../ui/Search";
import NavbarItem from "./NavbarItem";
import { ReactElement, useEffect, useState } from "react";
import { sidebarItem } from "@/app/data/NavItem";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleNavItemClick = (name: string) => {
    setActiveTab(name);
    if (activeTab !== "") {
      setIsOpenSideBar(false);
    }
  };

  const useIsMobile = (breakpoint = 768) => {};

  return (
    <div className="flex flex-col gap-1.5">
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

        <div
          className={`h-screen md:hidden fixed top-22 px-2 animation duration-1000 ease-in-out bg-white w-full ${isOpenSideBar ? "left-0" : "-left-110"}`}
        >
          <ul>
            {sidebarItem.map((item) => {
              const isActive = activeTab === item.name;

              return (
                <li
                  key={item.name}
                  // className={`${isActive ? "text-red-500" : ""} "flex py-4 border-b-[0.5px] border-[#ccc] justify-between"`}
                  className={`flex py-5 border-b-[0.5px] border-[#ccc] justify-between ${isActive ? "text-red-600 font-bold" : "text-black font-semibold"}`}
                >
                  <Link
                    className="font-bold"
                    href={item.href}
                    onClick={() => handleNavItemClick(item.name)}
                  >
                    {item.label}
                  </Link>

                  <ChevronRight />
                </li>
              );
            })}
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
            <div className="md:hidden">
              {isOpenSideBar ? (
                <X onClick={() => setIsOpenSideBar(false)} color="black" />
              ) : (
                <Menu
                  onClick={() => setIsOpenSideBar(true)}
                  color="black"
                  className=""
                />
              )}
            </div>
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
