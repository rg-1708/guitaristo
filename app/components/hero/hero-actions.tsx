import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../ui/typewriter-effect";

const words = [
  {
    text: "You",
  },
  {
    text: "will",
  },
  {
    text: "play",
  },
  {
    text: "like",
  },
  {
    text: "a",
  },
  {
    text: "Pro.",
    className: "text-red-400 dark:text-red-400",
  },
];

const HeroActions = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <TypewriterEffect words={words} className="my-5" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
};

export default HeroActions;
