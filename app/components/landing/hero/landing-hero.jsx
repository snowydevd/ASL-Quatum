import React from "react";
import blur from "@/public/blurbg.svg";
import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="h-[40vh] w-full flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center text-center lg:p-0 p-4">
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
      </div>
      <Image
        alt="blue bur behind header"
        src={blur}
        className="absolute -z-10 lg:block hidden"
      />
    </section>
  );
}
