"use client";

import React from "react";
import { Resend } from "resend";
import { useState } from "react";

// #############################
// #############################
// #############################
//                            ##
// PENDIENTE                  ##
//                            ##
// #############################
// #############################
// #############################

export default function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const resend = new Resend("re_Z4tnGcG9_EzQaydMvyiTKmDTfXcfz4B1F");

  const fields = [
    {
      label: "Email",
      placeholder: "example@mail.com",
      action: (e) => setEmail(e.target.value),
    },
    {
      label: "Full Name",
      placeholder: "John Doe",
      action: (e) => setName(e.target.value),
    },
    {
      label: "Message",
      placeholder: "Type your question here...",
      action: (e) => setMessage(e.target.value),
    },
  ];

  const handleSubmit = () => {
    resend.emails.send({
      from: "alejandromartinez@aslquantum.com",
      to: email,
      subject: "ASL Quantum - Contact",
      html: `<p> hi! ${name} your message has been sent </p>`,
    });
  };

  return (
    <form className="max-w-sm mx-auto">
      {fields.map((field) => {
        return (
          <div className="mb-5" key={field.label}>
            handleSubmit
            <label
              htmlFor={field.label}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {field.label}
            </label>
            <input
              type={field.label}
              id={field.label}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder={field.placeholder}
              required
            />
          </div>
        );
      })}

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        onClick={() => handleSubmit()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send e-mail
      </button>
    </form>
  );
}
