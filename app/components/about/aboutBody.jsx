/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import chart from "@/public/chart.png";
import Macbook from "@/public/macbook.png";
import MacbookPhone from "@/public/macbook-phone.png";

import Alejandro from "@/public/alejandro.png";
import Santiago from "@/public/santiago.png";

export default function AboutBody() {
  const team = [
    {
      label: "Santiago Rivas",
      photo: Santiago,
      role: "Co-Founder",
    },
    {
      label: "Alejandro Martinez",
      photo: Alejandro,
      role: "Co-Founder",
    },
  ];

  const feats = [
    {
      label: "ROI higher than 30%",
      delay: 0.3,
    },
    {
      label: "Continuous optimization and support",
      delay: 0.5,
    },
    {
      label: "Increased market share",
      delay: 0.7,
    },
    {
      label: "Enhanced brand visibility and reputation",
      delay: 0.9,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center lg:mt-0 mt-32">
      {/* ABOUT LANDING */}
      <div className="w-full flex flex-col justify-center lg:flex-row items-center">
        <aside className="w-10/12 lg:w-5/6 mb-5 lg:mb-32 lg:ml-56 text-left flex flex-col justify-start items-start p-3">
          <div className="w-3/4  flex flex-col ">
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className=" font-light leading-none tracking-tight text-zinc-50 text-5xl md:text-4xl lg:text-8xl "
            >
              WE ARE MORE
            </motion.h3>
            <div className="flex gap- items-center justify-start">
              <motion.div
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3, ease: "easeInOut" }}
                className="bg-white h-1 w-1/4 rounded-lg lg:block hidden"
              ></motion.div>
              <motion.h3
                initial={{ x: -70, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className=" font-normal  leading-tight tracking-tight text-zinc-50 text-5xl md:text-4xl lg:text-7xl  lg:ml-3"
              >
                THAN JUST
              </motion.h3>
            </div>

            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className=" font-normal leading-none tracking-tight text-zinc-50  text-5xl md:text-4xl lg:text-8xl  lg:ml-8"
            >
              A COMPANY.
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            className="text-left w-full lg:w-3/4 text-lg"
          >
            We are your <span className="text-white"> growth partners</span>. We
            are passionate about working hand in hand with businesses like
            yours, understanding that each one has its own goals and unique
            challenges.
          </motion.p>
        </aside>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="w-full flex items-start justify-end "
        >
          <Image
            alt="Macbook"
            src={Macbook}
            width={1200}
            className="lg:block hidden"
          />
          <Image
            alt="Macbook"
            src={MacbookPhone}
            width={1200}
            className="lg:hidden block"
          />
        </motion.div>
      </div>

      {/* GENERAL INFORMATION */}
      <div className="mt-16 lg:mt-24 w-full flex flex-col justify-center items-center ">
        {/* <div>
          <Image alt="ASL Quantum big logo" src={quantum} width={500} />
        </div> */}
        <div className="w-full flex flex-col justify-center items-center rounded-xl gap-16">
          {/* PHOLOSOPHY */}
          <section className="w-full flex justify-center items-center mt-32 h-[35vh]">
            <div className=" w-full flex flex-col md:flex-row justify-center items-center ">
              <div className="lg:w-2/4 flex flex-col items-start justify-start stop-3  sticky">
                <motion.h3
                  initial={{ opacity: 0, x: -60 }}
                  transition={{ delay: 0.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className=" font-normal leading-tight tracking-tight text-zinc-50 text-left text-3xl md:text-4xl lg:text-8xl lg:font-bold "
                >
                  We are more than just your partners.
                </motion.h3>
                <ul className="flex flex-col mt-5 gap-3">
                  {feats.map((feat) => {
                    return (
                      <motion.li
                        key={feat.label}
                        initial={{ opacity: 0, x: -30 }}
                        transition={{ delay: feat.delay }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-row items-center gap-2 text-xl"
                      >
                        {" "}
                        <FaCheck className="text-green-400" /> {feat.label}
                      </motion.li>
                    );
                  })}
                </ul>
                {/* <Image src={city} alt="Palms" className="w-full h-[65%] z-10" /> */}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                transition={{ delay: 1, duration: 0.4 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="shadow-xl shadow-sky-950 bg-base-200  text-black rounded-lg lg:block hidden"
              >
                <Image
                  src={chart}
                  alt="Chart"
                  width={600}
                  className="rounded-xl"
                />
              </motion.div>
            </div>
          </section>

          {/* Why choose us? */}
          {/* <section className="w-full flex justify-center items-center ">
            <div className=" w-full lg:w-3/4 flex flex-col justify-start items-start">
              <div className="w-full flex gap- items-center justify-start">
                <div className="bg-white h-1 w-1/12 rounded-lg lg:block hidden"></div>
                <h3 className=" font-normal leading-tight tracking-tight text-zinc-50 text-3xl md:text-4xl lg:text-6xl lg:font-bold lg:ml-3">
                  WHY CHOOSE US?
                </h3>
              </div>
              <p className="text-md lg:text-xl">
                {" "}
                We understand that you've probably heard the term "Growth
                Partner" and have been offered these services countless times
                through various channels. Let us show you why we stand out from
                the competition and why you should take a moment to choose us.
              </p>

              <div className="mt-4 w-full lg:w-3/4">
                <h4 className="font-normal leading-tight tracking-tight text-zinc-50 text-xl md:text-xl lg:text-3xl lg:font-bold ">
                  Active Support
                </h4>
                <p>
                  We recognize that each company has a different situation. We
                  take the time to listen, understand your goals and challenges
                  because your success is our success; if you win, we win.
                </p>
              </div>
              <div className="mt-3 w-full lg:w-3/4">
                <h4 className="font-normal leading-tight tracking-tight text-zinc-50 text-xl md:text-xl lg:text-3xl lg:font-bold ">
                  Tailored Solutions
                </h4>
                <p>
                  There are no one-size-fits-all solutions here. We won't
                  transform your business into a multimillion-dollar one
                  overnight, but we create customized strategies that fit the
                  specific needs of your business, ensuring that each step is
                  meaningful and aligned with your objectives, exponentially
                  increasing your revenue in a short period.
                </p>
              </div>
              <div className="mt-3 w-full lg:w-3/4">
                <h4 className="font-normal leading-tight tracking-tight text-zinc-50 text-xl md:text-xl lg:text-3xl lg:font-bold ">
                  Meaningful Connections
                </h4>
                <p>
                  Building strong relationships is our priority. We collaborate
                  with you and other stakeholders transparently, fostering a
                  healthy business relationship where both parties feel
                  comfortable working together.
                </p>
              </div>
            </div>
          </section> */}

          {/* <Info /> */}
          <div className="w-full flex flex-col justify-center items-center rounded-xl gap-16 mt-44">
            {/* PHOLOSOPHY */}
            <motion.section
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="w-2/4 py-12 px-6 h-[70vh] rounded-3xl flex flex-col justify-start items-center bg-white shadow-2xl shadow-teal-800 text-black "
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.7 }}
                  whileInView={{ opacity: 1 }}
                  className=" font-normal leading-tight tracking-tight  text-left text-3xl md:text-3xl lg:text-6xl lg:font-bold "
                >
                  Our Philosophy
                </motion.h3>
              </div>
              <div className="text-xl mt-3 flex flex-col gap-5 text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.9 }}
                  whileInView={{ opacity: 1 }}
                >
                  At ASL Quantum, we embrace the philosophy of being more than
                  consultants; we become dedicated growth partners committed to
                  driving sustainable transformation and success for our
                  clients. Our methodology is grounded in a holistic approach
                  that incorporates the latest trends in technology, marketing,
                  and strategic management, tailoring them to the specific needs
                  and unique context of each business. We firmly believe in the
                  power of innovation and continuous learning to overcome market
                  challenges and achieve ambitious goals. With a team of
                  passionate and committed experts, ASL Quantum works hand in
                  hand with each client, fostering a culture of transparency,
                  collaboration, and excellence. Our aim is not just to achieve
                  short-term growth but also to ensure long-term viability and
                  development, preparing organizations to lead in the digital
                  age. At ASL Quantum, our clients' success is our success, and
                  together, we unlock unlimited potential to create
                  extraordinary futures.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  transition={{ delay: 1.1 }}
                  whileInView={{ opacity: 1 }}
                >
                  Building on this foundation, ASL Quantum prioritizes
                  personalized strategies that go beyond conventional solutions.
                  We delve deep into the unique ecosystem of each client,
                  employing data-driven insights and agile methodologies to
                  navigate complexities and capitalize on opportunities. Our
                  approach is dynamic, allowing us to adapt swiftly to changing
                  market conditions and evolving customer expectations. By
                  emphasizing innovation in process and thought, we not only
                  address current challenges but also anticipate future trends,
                  ensuring our clients remain at the forefront of their
                  industries. The partnerships we forge are based on mutual
                  trust and shared vision, leading to breakthrough achievements
                  and unparalleled growth. With ASL Quantum, businesses are not
                  just prepared for the future; they are shaping it, setting new
                  standards of excellence and redefining what's possible in
                  their fields.
                </motion.p>
              </div>
            </motion.section>

            {/* <Info /> */}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="w-full flex flex-col justify-center items-center mt-32 mb-16">
        <h4 className=" font-extrabold leading-none tracking-tight text-zinc-50 md:text-2xl lg:text-4xl ">
          Our Team
        </h4>
        <div className="w-4/6 flex flex-row gap-5 justify-center items-center mt-4 h-[35vh]">
          {team.map((member) => {
            return (
              <div
                key={member.label}
                className="w-[250px] rounded-lg flex flex-col justify-start items-center h-full px-2 py-4"
              >
                <div className=" b">
                  <Image
                    alt={member.label}
                    src={member.photo}
                    width={200}
                    className="rounded-full"
                  />
                </div>
                <hr className="text-white" />

                <div className="text-center mt-3">
                  <h5 className="text-2xl text-white font-bold">
                    {member.label}
                  </h5>
                  <p className="text-gray-300">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
