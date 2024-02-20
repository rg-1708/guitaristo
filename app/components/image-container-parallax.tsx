import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ContainerParallax() {
  return (
    <>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          images={images}
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Do you want to be <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-indigo-400">
                  The Best?
                </span>
              </h1>
            </>
          }
        />
      </div>
    </>
  );
}

const images = [
  {
    width: 640,
    height: 959,
    src: "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 960,
    src: "https://images.unsplash.com/photo-1466232373731-46205f0b668e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Guitar amp with coffee jug on top",
  },
  {
    width: 640,
    height: 958,
    src: "https://images.unsplash.com/photo-1663494508488-e5b2516f4275?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1517260286907-f7d84f1f9ba4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Leg placed on top of a guitar pedal panel",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1587052579105-c957b0497535?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/flagged/photo-1575835242897-2c5b896e8d70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1499424017184-418f6808abf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1598517511269-fd89417b561c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
  {
    width: 640,
    height: 426,
    src: "https://images.unsplash.com/photo-1681855178578-4535aba9b305?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "man playing a solo on stage",
  },
];
