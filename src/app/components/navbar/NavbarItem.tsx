"use client";

import { NavItem } from "@/app/data/NavItem";
import Link from "next/link";
import Navlink from "next/link";
import { useState } from "react";

const NavbarItem = () => {
  const [activeTab, setActiveTab] = useState("women");

  return (
    <div className="flex gap-5 items-center border-b border-[#ccc] lg:border-none w-full  md:gap-0 justify-between lg:gap-5 ">
      {/* // <div className="flex "> */}
      {NavItem.map((item) => {
        const isActive = activeTab === item.name;

        return (
          <div key={item.name} className="flex flex-col gap-3">
            <div
              onClick={() => setActiveTab(item.name)}
              className="flex flex-col items-stretch "
            >
              <Navlink
                href={item.href}
                // onClick={() => setActiveTab(item.name)}
                className="text-sm font-semibold uppercase"
              >
                {item.label}
              </Navlink>

              <span
                className={`mt-2 xl:mt-5 h-0.75 bg-gray-800 w-full ${
                  isActive ? "bg-black" : "bg-transparent"
                }`}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarItem;
