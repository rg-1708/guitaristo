"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Extensive Video Library",
    description:
      "Immerse yourself in our vast and diverse collection of guitar tutorial videos, meticulously curated to cater to every skill level and musical interest. From fundamental techniques to advanced concepts, our comprehensive library ensures that there's always something new to discover and learn.",
  },
  {
    title: "Step-by-Step Instruction",
    description:
      "Experience the art of guitar playing like never before with our in-depth, step-by-step instructional videos. Our expert instructors break down complex techniques into manageable steps, providing clear and detailed demonstrations to help you grasp each concept with ease and confidence.",
  },
  {
    title: "Genre-Specific Lessons",
    description:
      "Explore the rich tapestry of musical genres with our genre-specific guitar lessons. Whether you're drawn to the raw energy of rock, the soulful melodies of blues, or the improvisational freedom of jazz, our tutorials cater to a wide range of musical tastes, ensuring that you can learn and master the styles that resonate with you the most.",
  },
  {
    title: "Instructor Expertise",
    description:
      "Learn from the best with our team of experienced instructors, each bringing a wealth of knowledge, skill, and passion to their teaching. From seasoned professionals to renowned educators, our instructors are dedicated to helping you unlock your full potential as a guitarist, providing insightful tips, personalized feedback, and expert guidance every step of the way.",
  },
];
const images = [
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1604286742257-9d211b05b0df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1588450523206-e0b048d8f4d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function OurServices() {
  return (
    <>
      <StickyScroll content={content} images={images} />
    </>
  );
}
