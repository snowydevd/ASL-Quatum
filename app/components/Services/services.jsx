"use client";

import React from "react";
import Iphone from "@/public/iphone.png";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "@/app/components/Card/card";

import linkedin from "@/public/linkedin.webp";
import funnel from "@/public/funnel.webp";
import contentCreation from "@/public/content-creation.webp";
import appointment from "@/public/appointmentSetting.webp";
import sales from "@/public/sales.png";
import consulting from "@/public/consulting.png";
import webpage from "@/public/webpage.webp";

export default function ServicesBody() {
  const popular = [
    {
      label: "LinkedIn Profile Optimization",
      description:
        "We optimize your LinkedIn profile by modifying your banner, profile photo, description and many other aspects",
      image: linkedin,
    },
    {
      label: "Sales funnel",
      description:
        "Technical proposal of a sales funnel combined with this system",
      image: funnel,
    },
    {
      label: "Content creation (Post & Newsletter)",
      description: "This'll be done by a copywriter.",
      image: contentCreation,
    },
    {
      label: "Appointment Setting",
      description:
        "It's a skill where specialized professionals who are in charge of finding your ideal client and generate a recurring flow of calls. All of these potential customers are fully qualified to pay for your service.",
      image: appointment,
    },
    {
      label: "Sale Optimization",
      description:
        "We will help you structure a more attractive offer using the theory of value, as laid out by Alex Hormozi (Grand Slam Offer).",
      image: sales,
    },
  ];

  const aditional = [
    {
      label: "1:1 Consultory",
      description:
        "In 3 sessions we'll help you define your ideal client, optimize your offer or restructure it, optimize your LinkedIn profile and provide you with a sales consultation.",
      image: consulting,
    },
    {
      label: "Webpage creation",
      description:
        "Professional specialized in SEO optimization will create a webpage for your business to be more recognizable by the search engines.",
      image: webpage,
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center mt-32 mb-0 p-2">
      <div className=" w-full md:w-[68%] flex lg:flex-row flex-col justify-center gap-5 lg:justify-between items-center mb-44 md:text-left text-center">
        <div className="md:w-3/4 lg:w-2/4 w-full ">
          <motion.h3
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-extrabold leading-none tracking-tight text-zinc-100 md:text-5xl lg:text-6xl "
          >
            What do we offer?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:w-3/4"
          >
            We offer different digital strategies where we generate recurrent
            monthly flow of meetings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-full flex justify-center items-center md:justify-start md:items-start"
          >
            <Link
              href="#program"
              className="w-fit mt-2 gradient-bg text-whita font-semibold text-white hover:-translate-y-1 duration-200 text-xl rounded-md px-3 py-1 flex items-center justify-center"
            >
              Check it out
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image alt="Iphones" src={Iphone} width={700} />
        </motion.div>
      </div>

      <div
        id="program"
        className="w-full lg:w-[1200px]  flex flex-col justify-center items-center mt-32 py-5"
      >
        <h3 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-16">
          OUR PROGRAM
        </h3>

        <section className=" flex flex-wrap justify-center gap-6">
          {popular.map((strategy) => {
            return (
              <Card
                key={strategy.label}
                title={strategy.label}
                desc={strategy.description}
                image={strategy.image}
              />
            );
          })}
        </section>

        <div className="divider"></div>

        <h3 className=" text-4xl lg:text-6xl font-extrabold tracking-tight mb-16 mt-16">
          Additional Services
        </h3>
        <section className=" flex flex-wrap justify-center gap-6">
          {aditional.map((strategy) => {
            return (
              <Card
                key={strategy.label}
                title={strategy.label}
                desc={strategy.description}
                image={strategy.image}
              />
            );
          })}
        </section>

        <Link
          href="https://calendly.com/aslquantum/30min?month=2024-01"
          target="__blank"
          className="mt-6 gradient-bg text-whita font-semibold text-white hover:-translate-y-1 duration-200 text-xl rounded-md px-3 py-1 flex items-center justify-center"
        >
          Schedule a meeting
        </Link>
      </div>
    </section>
  );
}
