import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import { DecoHeader } from "./ui/deco-header";
import { cn } from "@/utils/cn";

export function AboutUs() {
  return (
    <section id="about">
      <DecoHeader text="Who we are" />
      <BentoGrid className="px-5 md:px-0 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
const HeaderImage = ({
  url,
  width,
  className,
  height,
}: {
  url: string;
  width?: number;
  height?: number;
  className?: string;
}) => (
  <Image
    className={cn(
      `rounded-md w-full object-cover flex-1 min-h-[6rem] h-full`,
      className
    )}
    width={width ? width : 320}
    height={height ? height : 213}
    quality={99}
    alt="playing guitar"
    src={url}
  />
);

const items = [
  {
    title: "Our Mission",
    description: `At Guitaristo, our mission is simple yet profound: 
    to ignite passion and empower musicians worldwide through innovative music education.`,
    header: (
      <HeaderImage url="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Our Story",
    description: `Discover the inspiring journey of Guitaristo, 
    from a shared passion for music to the creation of a groundbreaking platform that revolutionizes music education.`,
    header: (
      <HeaderImage url="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Our Values",
    description: `Our values drive everything we do: passion fuels our creativity, 
    innovation powers our solutions, inclusivity guides our community, and excellence defines our standards`,
    header: (
      <HeaderImage url="https://images.unsplash.com/photo-1503832725-c34828469568?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Our Impact",
    description:
      "Experience the profound impact of our community as we change lives, shape futures, and inspire generations of musicians, one note at a time",
    header: (
      <HeaderImage
        className="object-cover"
        width={5472}
        height={3648}
        url="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    title: "Our pursuit of Excellence",
    description:
      "We are committed to the relentless pursuit of excellence in everything we do",
    header: (
      <HeaderImage url="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Our Global Reach",
    description: `Join a global community of musicians united by a shared love for music and a desire to learn and grow together.`,
    header: (
      <HeaderImage url="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    ),
  },
  {
    title: "Our Future Vision",
    description: `With our   bold vision for the future,
    we continue to innovate, educate, and inspire, shaping the future of music one student at a time`,
    header: (
      <HeaderImage
        width={4843}
        height={3229}
        url="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
];
