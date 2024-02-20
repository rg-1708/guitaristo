import React from "react";
import { GridBackground } from "./ui/backgrounds";
import { SectionHeader } from "./ui/section-header";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export const Testimonials = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
        What others say
        <br />
        about <span className="text-red-500">Guitaristo</span>
      </h1>

      <div
        className={`h-[23rem] rounded-md flex flex-col antialiased bg-white dark:bg-black 
        dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden`}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "Guitaristo has been a game-changer for me. The lessons are structured, engaging, and incredibly effective. I've gone from struggling to play a single chord to confidently strumming my favorite songs in just a few weeks!",
    name: "Alexandra Smith",
    title: "Beginner Guitarist",
  },
  {
    quote:
      "I've been using Guitaristo for a while now, and I'm continuously impressed by the quality of instruction. The instructors are knowledgeable, patient, and make learning guitar a joy. I've finally found a platform that works for me!",
    name: "Benjamin Lee",
    title: "Intermediate Guitarist",
  },
  {
    quote:
      "Guitaristo's lessons are top-notch. As a busy professional, I appreciate the flexibility to learn at my own pace. The video tutorials are clear, concise, and packed with valuable tips and techniques. Highly recommended!",
    name: "Sophia Patel",
    title: "Working Professional",
  },
  {
    quote:
      "I've tried other online guitar platforms, but Guitaristo stands out for its exceptional quality and affordability. The lessons cover everything from basic chords to advanced techniques, making it suitable for beginners and seasoned players alike.",
    name: "Daniel Thompson",
    title: "Experienced Guitarist",
  },
  {
    quote:
      "As a parent, I couldn't be happier with Guitaristo. It's helped my child develop a newfound passion for music. The lessons are engaging, interactive, and tailored to their learning style. Thank you for providing such a valuable resource!",
    name: "Jessica Davis",
    title: "Parent",
  },
  {
    quote:
      "Guitaristo has exceeded my expectations in every way. The instructors are not only skilled musicians but also excellent teachers. I appreciate the attention to detail and the personalized feedback provided in each lesson. Keep up the great work!",
    name: "Ryan Wilson",
    title: "Advanced Guitarist",
  },
  {
    quote:
      "I've been using Guitaristo to supplement my in-person guitar lessons, and it's been a fantastic resource. The variety of lessons and styles covered is impressive, and the platform is user-friendly. I highly recommend it to anyone looking to improve their guitar skills.",
    name: "Emily Thompson",
    title: "Music Student",
  },
];
