import React from "react";

export const SectionHeader = ({ text }: { text: string }) => {
  return (
    <div className="h-[12rem] md:h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
        {text}
      </h1>
      <div className="w-[40rem] h-2 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-200 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-200 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  );
};
