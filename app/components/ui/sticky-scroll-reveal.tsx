"use client";
import React, { useRef } from "react";
import {
  ForwardRefComponent,
  HTMLMotionProps,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

export const StickyScroll = ({
  content,
  images,
}: {
  images: {
    src: string;
  }[];
  content: {
    title: string;
    description: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = ["var(--neutral-800)", "var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] max-w-screen-2xl mx-auto overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-scrollbar"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden">
        <Image
          src={images[activeCard % images.length].src}
          width={600}
          height={432}
          alt="current section image (dynamic)"
          className="h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );
};
