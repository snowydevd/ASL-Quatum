import React from "react";
import Image from "next/image";

export default function Card({ title, desc, image }) {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 ">
      <Image className="rounded-t-lg" src={image} alt={title} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}
