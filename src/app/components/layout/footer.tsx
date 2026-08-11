"use client";

import { FooterData } from "@/app/data/footerData";
import { ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlayStoreButton from "../button/playstore";
const Footer = () => {
  const [activeLink, setActiveTab] = useState("");
  return (
    <section className="bg-black pb-40 w-full px-5 py-3 items-start  md:py-8 flex flex-col md:flex-row-reverse gap-10 md:justify-between ">
      <div className="flex flex-col gap-5 md:flex-col-reverse md:w-[50%]">
        <div className="flex justify-evenly gap-5">
          <Image
            src="/assets/Instagram.png"
            className=""
            width={30}
            height={30}
            alt="social media"
          />
          <Image
            src="/assets/Instagram.png"
            className=""
            width={30}
            height={30}
            alt="social media"
          />
          <Image
            src="/assets/Instagram.png"
            className=""
            width={30}
            height={30}
            alt="social media"
          />
          <Image
            src="/assets/Instagram.png"
            className=""
            width={30}
            height={30}
            alt="social media"
          />
          <Image
            src="/assets/Instagram.png"
            className=""
            width={30}
            height={30}
            alt="social media"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col gap-5">
            <h3 className="text-white text-[12px] font-bold">
              SIGNUP FOR DISCOUNTS + UPDATES
            </h3>

            <div className="px-2 flex justify-between items-center h-14.5 rounded-sm bg-white ">
              <input
                type="text"
                placeholder="Phone Number or Email"
                className="outline-none border-none"
              />

              <button className="flex items-center bg-[#ccc] w-10 h-10 rounded-full">
                <ChevronRight className="mx-auto" color="black" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[#a3a2a2] text-[12px] md:text-base">
                By signing up for email, you agree to fashionNova{" "}
                <Link className="underline" href="*">
                  Terms&amp; Conditions
                </Link>{" "}
                and{" "}
                <Link className="underline" href="*">
                  privacy policy
                </Link>
              </p>

              <p className="text-[#a3a2a2] text-[12px] md:text-base">
                By submitting your phone number, you agree to receive recurring
                automated promotional and personalized marketing text messages
                (e.g. cart reminders) from Fashion Nova at the cell number used
                when signing up. Consent is not a condition of any purchase.
                Reply HELP for help and STOP to cancel. Msg frequency varies.
                Msg &amp; data rates may apply. By submitting your phone number,
                and signing up for texts, you also agree to our&#32;
                <Link href="*" className="underline">
                  {" "}
                  Terms&amp;Privacy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex w-full gap-8 md:w-[50%]">
        <div className="py-4 xl:flex flex-col gap-5 hidden">
          <p className="text-[12px] font-bold text-white">
            SHOP FASTER WITH THE APP
          </p>
          <div className="flex gap-2">
            <PlayStoreButton />
            <PlayStoreButton />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-3">
          {FooterData.map((item) => {
            const isActive = activeLink === item.name;

            return (
              <div
                key={item.name}
                className="border-b border-[#808080] lg:border-none w-full py-4"
              >
                <div key={item.name} className="">
                  <div className="flex justify-between text-white">
                    <p className="text-sm capatilize">{item.name}</p>

                    <div className="lg:hidden">
                      {activeLink === item.name ? (
                        <Minus onClick={() => setActiveTab("")} />
                      ) : (
                        <Plus onClick={() => setActiveTab(item.name)} />
                      )}
                    </div>
                  </div>

                  <div className="lg:hidden">
                    {activeLink === item.name && (
                      <ul className="my-3 flex flex-col gap-3">
                        {item.links.map((item) => (
                          <li className="text-sm capitalize text-[12px] text-[#808080]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="hidden lg:flex flex-col">
                    <ul className="my-3 flex flex-col gap-3">
                      {item.links.map((item) => (
                        <li className="text-sm capitalize text-[12px] text-[#808080]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
