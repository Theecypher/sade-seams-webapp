"use client";

import { NavItem } from "@/app/data/NavItem";
import Link from "next/link";
import Navlink from "next/link";
import { useState } from "react";

const NavbarItem = () => {
  const [activeTab, setActiveTab] = useState("women");

  return (
    <div className="flex gap-5 border-b pb-px border-[#ccc] md:border-none w-full items-center justify-evenly md:gap-0 md:mx-5 md:justify-between lg:gap-5 ">
      {NavItem.map((item) => {
        const isActive = activeTab === item.name;

        return (
          // <div className="w-full">
            <Navlink
              className={`${isActive ? "border-b-3 border-black" : ""} text-sm font-semibold uppercase`}
              key={item.label}
              onClick={() => setActiveTab(item.name)}
              href={item.href}
            >
              {item.label}
            </Navlink>
          // </div>
        );
      })}
    </div>
  );
};

export default NavbarItem;
