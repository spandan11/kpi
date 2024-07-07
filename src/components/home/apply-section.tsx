import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { HowToApply } from "@/constants/LandingPageConstants";
import { Button } from "../ui/button";

const ApplySection = () => {
  return (
    <div className="mt-16 flex h-full w-full flex-col items-center justify-center bg-[#F6F6F6] px-2 md:mt-20 md:space-y-4 md:px-10 md:py-24 lg:mt-24 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/assets/apply.jpg"
            width={600}
            height={400}
            alt="apply"
            className="rounded-full p-6"
          />
        </div>
        <div className="flex flex-col items-center justify-start space-y-10 md:space-y-16 md:pl-8 md:pr-4">
          <h2
            className={`${robotoSlab.className} text-center text-xl font-bold text-[#001E43] md:text-4xl`}
          >
            How To Apply At Kankai Polytechnic Institute
          </h2>
          {/* <div className="flex flex-col items-start justify-center space-y-2 md:space-y-4"> */}
          {HowToApply.map((item, index) => (
            <div
              className="flex h-full w-full flex-col items-start justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0"
              key={index}
            >
              <item.icon className="-mt-2 h-8 w-8 text-[#FA3F50] md:h-16 md:w-16" />
              <div className="flex flex-col items-start justify-center space-y-2">
                <h3
                  className={`${robotoSlab.className} text-lg font-bold text-[#001E43] md:text-xl`}
                >
                  <span className="text-[#FA3F50]">{item.step}</span>&nbsp;
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div className="mr-auto flex flex-col items-start justify-center p-0 md:mr-0 md:flex-row md:justify-between">
            <Button className="rounded-none bg-[#FA394A] p-6 transition-colors duration-500 hover:bg-white hover:text-black">
              Take a Tour <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
            <Link
              href="/about-us"
              className={`${robotoSlab.className} flex items-center justify-center gap-2 rounded-none bg-[#F6F6F6] p-2 text-sm font-semibold text-[#FA3F50] underline transition-all delay-300 duration-300 hover:text-red-500 md:text-lg`}
            >
              See How To Apply
              <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
