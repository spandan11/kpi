import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
      }}
      className="relative h-full bg-cover bg-local bg-center bg-no-repeat px-4 py-16 md:bg-left-top md:px-10 lg:px-20"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* <Image
        src="/background.jpg"
        width={1920}
        height={1080}
        alt="background"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      /> */}
      <div className="relative z-10  flex h-full w-full flex-col items-start justify-start gap-8  md:w-4/5 md:justify-center">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-left text-3xl font-bold text-white sm:text-6xl md:text-8xl">
            A World-Classes Education For Your Better life
          </h2>
          <p className="text-sm text-primary-foreground/60 md:text-lg">
            We are a Top 06 Canadian university and one of the Top 120 in the
            world. Find out what makes our student experience so rich,
            meaningful and life-changing.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 md:flex-row md:gap-8">
          <Button className="rounded-none bg-[#FA394A] p-6 transition-colors duration-500 hover:bg-white hover:text-black">
            Take a Tour <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
          <Button
            className="rounded-none p-6 transition-all delay-150 duration-300 hover:underline"
            variant="outline"
          >
            View our Programs
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
