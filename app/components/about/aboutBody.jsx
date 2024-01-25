/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Macbook from "@/public/macbook.png";
import MacbookPhone from "@/public/macbook-phone.png";

import Alejandro from "@/public/alejandro.png";
import Santiago from "@/public/santiago.png";

import Info from "../info/info";
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

  return (
    <section className="w-full flex flex-col items-center justify-center lg:mt-0 mt-32">
      {/* ABOUT LANDING */}
      <div className="w-full flex flex-col justify-center lg:flex-row items-center ">
        <aside className="w-full lg:w-5/6 mb-5 lg:mb-32 lg:ml-32 text-left flex flex-col justify-start items-start p-3">
          <div className="w-3/4 mb-3 flex flex-col">
            <h3 className=" font-normal leading-none tracking-tight text-zinc-50 text-5xl md:text-4xl lg:text-7xl ">
              WE ARE MORE
            </h3>
            <div className="flex gap- items-center justify-start">
              <div className="bg-white h-1 w-1/4 rounded-lg lg:block hidden"></div>
              <h3 className=" font-normal  leading-tight tracking-tight text-zinc-50 text-5xl md:text-4xl lg:text-6xl  lg:ml-3">
                THAN JUST
              </h3>
            </div>

            <h3 className=" font-normal leading-none tracking-tight text-zinc-50  text-5xl md:text-4xl lg:text-7xl  lg:ml-8">
              A COMPANY.
            </h3>
          </div>

          <p className="text-left">
            We are your <span className="text-white"> growth partners</span>. We
            are passionate about working hand in hand with businesses like
            yours, understanding that each one has its own goals and unique
            challenges.
          </p>
        </aside>
        <div className="w-full flex items-start justify-end ">
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
        </div>
      </div>

      {/* GENERAL INFORMATION */}
      <div className="mt-16 lg:mt-44 w-full flex flex-col justify-center items-center ">
        {/* <div>
          <Image alt="ASL Quantum big logo" src={quantum} width={500} />
        </div> */}
        <div className="w-full lg:w-3/4 flex flex-col justify-start items-start rounded-xl gap-16 p-3">
          {/* PHOLOSOPHY */}
          <section className="w-full flex justify-center items-center">
            <div className=" w-full lg:w-3/4 flex flex-col justify-start items-center">
              <div className="w-full flex gap- items-center justify-start">
                <div className="bg-white h-1 w-1/6 rounded-lg lg:block hidden"></div>
                <h3 className=" font-normal leading-tight tracking-tight text-zinc-50 text-3xl md:text-4xl lg:text-6xl lg:font-bold lg:ml-3">
                  OUR PHILOSOPHY
                </h3>
              </div>
              <p className="text-md lg:text-xl">
                {" "}
                We believe in the power of genuine relationships and authentic
                collaboration. At ASL Quantum, we dont just offer services; we
                provide a strong partnership based on mutual trust and a shared
                commitment to achieving success through diverse digital
                strategies.
              </p>
            </div>
          </section>

          {/* Why choose us? */}
          <section className="w-full flex justify-center items-center ">
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
          </section>

          {/* <Info /> */}
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
