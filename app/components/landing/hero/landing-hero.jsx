import React from "react";
import blur from "@/public/blurbg.svg";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function LandingHero() {
  return (
    <section className="h-[40vh] w-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col justify-center items-center text-center lg:p-0 p-4"
      >
        <h1 className="text-2xl font-extrabold leading-none tracking-tight text-zinc-50 md:text-5xl lg:text-6xl ">
          DIGITAL STRATEGIES,{" "}
          <span className="gradient font-extrabold">REAL RESULTS</span>
        </h1>
        <p className="lg:text-md text-xs">
          ASL Quantum® LLC. Colorado, United States of America{" "}
        </p>

        <div className="flex gap-3 items-center mt-5">
          <Link
            href="/about"
            className="py-2 px-3 bg-blue-500 hover:bg-blue-600 duration-150 text-white font-semibold rounded-lg"
          >
            {" "}
            More about us
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -z-10 lg:block hidden"
      >
        <Image alt="blue bur behind header" src={blur} className="" />
      </motion.div>
    </section>
  );
}
