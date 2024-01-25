"use client";

import Image from "next/image";

import LandingHero from "./components/landing/hero/landing-hero";

import LandingMetrics from "./components/landing/metrics/metrics";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <LandingHero />
      <LandingMetrics />
    </main>
  );
}
