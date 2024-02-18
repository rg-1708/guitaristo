import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import HeroActions from "./hero-actions";

export function Hero() {
  return (
    <>
      <WavyBackground
        containerClassName="max-w-[100vw]"
        className="max-w-4xl mx-auto pb-40 px-3 flex items-center justify-center flex-col"
      >
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to <span className="text-red-400">Guitaristo</span>
        </p>
        <p className="text-xl md:text-2xl mt-4 text-white font-normal inter-var text-center">
          Your Gateway to the World of Electric Guitar!
        </p>
        <HeroActions />
      </WavyBackground>
    </>
  );
}
