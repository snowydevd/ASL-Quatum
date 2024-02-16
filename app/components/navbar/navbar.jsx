"use client";
import React from "react";
import Image from "next/image";
import headerLogo from "@/public/A.svg";
import { motion } from "framer-motion";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  const links = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },

    {
      label: "Services",
      url: "/services",
    },
  ];
  return (
    <nav className="w-full flex items-center justify-center top-[0%]">
      <div className="w-full lg:w-3/4 flex justify-between items-center  px-5 lg:px-16 py-5 rounded-xl">
        <div className="flex items-center gap-4">
          <Image
            alt="ASL quantum logo"
            src={headerLogo}
            className="lg:w-8 w-4"
          />
          <p className="text-xl">Asl Quantum</p>
        </div>

        <ul className="lg:block hidden">
          {links.map((link) => (
            <li key={link.label} className="inline-block px-4">
              <a
                href={link.url}
                className="text-white hover:text-violet-400 font-normal text-md transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="dropdown dropdown-end lg:hidden block">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-transparent text-2xl hover:bg-transparent"
          >
            <IoMenuOutline />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-lg w-52 text-left"
          >
            {links.map((link) => (
              <li key={link.label} className="inline-block px-4 text-left">
                <a
                  href={link.url}
                  className="text-white hover:text-violet-400 font-normal text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
