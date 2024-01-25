import React from "react";
import Image from "next/image";

export default function Info() {
  return (
    <section className="w-full flex justify-center items-center mt-32 mb-32">
      <div className="w-[800px] flex flex-row justify-between items-center h-[50vh] gap-3">
        <div className="w-2/4 h-full flux-bg flex justify-start rounded-lg items-end text-white">
          <p className="m-3 text-3xl font-bold">Welcome to the future</p>
        </div>

        <div className="w-full h-full gap-3 rounded-lg flex flex-col justify-between items-center ">
          <div className="w-full flex flex-col h-2/4 rounded-lg bg-white px-2 py-1">
            <div className="flex items-center gap-3">
              <div className="h-1 bg-black rounded-full gradient-bg w-1/12"></div>
              <h1 className="text-2xl font-bold text-black">Our Philosophy</h1>
            </div>

            <p className="text-gray-800 mt-3">
              We believe in the power of genuine relationships and authentic
              collaboration. At ASL Quantum, we dont just offer services; we
              provide a strong partnership based on mutual trust and a shared
              commitment to achieving success through diverse digital strategies
            </p>
          </div>
          <div className="w-full flex flex-col h-2/4 rounded-lg bg-white px-2 py-1"></div>
        </div>
      </div>
    </section>
  );
}
