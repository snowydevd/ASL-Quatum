"use client";

import React from "react";
import Counter from "../../Counter/counter";
import { AiOutlineSchedule } from "react-icons/ai";
import { PopupButton } from "react-calendly";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingMetrics() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: "easeIn" }}
      className="w-full flex flex-col justify-center items-center mb-4 mt-4"
    >
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-md lg:text-2xl font-medium">
          We help businesses escalate their revenue
        </h2>

        <div className="w-3/4 flex flex-col gap-6 justify-center items-center mt-8">
          <div className="bg-base-100 py-3 px-6 text-center">
            <h4 className="text-5xl font-semibold flex items-center   ">
              +$ <Counter from={0} to={270} />k
            </h4>

            <h3 className="text-2xl font-semibold ">Generated ROI</h3>
          </div>

          <aside className="w-full flex justify-center items-center gap-3">
            <div className="w-2/6 bg-base-100 shadow-xl shadow-violet-950 rounded-lg  py-3 px-6 text-center flex flex-col justify-center items-center">
              <h4 className="text-3xl font-semibold flex items-center   ">
                +<Counter from={0} to={200} />
              </h4>
              <h3 className="text-md font-light ">Meetings Generated</h3>
            </div>
            <div className="w-2/6 bg-base-100 shadow-xl shadow-violet-950 rounded-lg  py-3 px-6 text-center flex flex-col justify-center items-center">
              <h4 className="text-3xl font-semibold flex items-center   ">
                +<Counter from={0} to={50} />
              </h4>
              <h3 className="text-md font-light ">Sales Generated</h3>
            </div>
            <div className="w-2/6 bg-base-100 shadow-xl shadow-violet-950 rounded-lg  py-3 px-6 text-center flex flex-col justify-center items-center">
              <h4 className="text-3xl font-semibold flex items-center   ">
                +<Counter from={0} to={30} />
              </h4>
              <h3 className="text-md font-light ">Satisfied Clients</h3>
            </div>
          </aside>
        </div>
      </div>

      <Link
        href="https://calendly.com/aslquantum/30min?month=2024-01"
        target="__blank"
        className="mt-6 gradient-bg text-whita font-semibold text-white hover:-translate-y-1 duration-200 text-xl rounded-md px-3 py-1 flex items-center justify-center"
      >
        Schedule a meeting
      </Link>
    </motion.section>
  );
}
