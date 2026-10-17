"use client";

import Image, { ImageLoaderProps } from "next/image";
import {
  ChevronRight,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
  Heart,
  PoundSterling,
} from "lucide-react";
import Link from "next/link";
import NavSearch from "../ui/Search";
import NavbarItem from "./NavbarItem";
import { ReactElement, useEffect, useState } from "react";
import { NavItem, sidebarItem } from "@/app/data/NavItem";

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

  return (
    <div className="w-full">
      {/* // <div className="flex flex-col gap-2 border-8 lg:border-green-600 xl:border-red-800 md:border-blue-800"> */}
      <div className="flex flex-col gap-2 w-full px-2 md:pt-3 md:px-4 mb-1.5">
        <div className="flex items-center justify-between md:gap-5 lg:border-b border-gray-100 md:w-full">
          <div className="flex items-center justify-between lg:justify-start lg:gap-3">
            {/* business logo */}
            <div className="">
              {" "}
              <Image
                alt="logo"
                src="/assets/png/fashionnovalogo.png"
                loading="eager"
                width={160}
                height={130}
                // fill={true}
                // objectFit="contain"
                className=""
              />
            </div>

            {/* Navitem for desktop screen */}
            <div className="lg:flex hidden justify-between md:self-end ">
              <NavbarItem />
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-start md:gap-4 lg:gap-3">
            {/* Search bar for >=tablet screen */}
            <div className="hidden md:flex md:w-[350px] lg:w-[22rem] xl:w-[28rem]">
              <NavSearch hasSearchImage />
            </div>

            {/* icons */}
            <div className="flex items-center gap-4 md:gap-3 lg:gap-5">
              <PoundSterling
                className="hidden md:flex"
                width={20}
                height={20}
              />
              <User width={20} height={20} />
              <Heart width={20} height={20} />
              <ShoppingBag width={20} height={20} />
              <div className="lg:hidden">
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

        {/*  */}
        <div className="lg:hidden ">
          <NavbarItem />
        </div>

        <div className="w-full lg:hidden">
          <NavSearch hasSearchImage={true} />
        </div>

        <div className="hidden lg:flex w-full gap-3 scrollbar-none capitalize overflow-auto">
          {sidebarItem.map((item) => (
            <div
              key={item.name}
              className="flex text-nowrap w-full items-center gap-1 hover:bg-[#f0ecec] py-1 px-2  rounded-2xl"
            >
              <Link
                className="text-sm "
                href={item.href}
                onClick={() => handleNavItemClick(item.name)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        aria-hidden={!isOpenSideBar}
        className={`overflow-y-auto lg:hidden px-2 transition-[max-height,opacity,transform] animation duration-1000 ease-out motion-reduce:transition-none bg-white w-full ${isOpenSideBar ? "max-h-[80vh] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      >
        <ul>
          {sidebarItem.map((item, index) => {
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
    </div>
  );
};

export default Navbar;
