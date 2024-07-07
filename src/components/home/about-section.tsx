import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 pt-16 md:flex-row md:px-10 md:pt-20 lg:px-20 lg:pt-24">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <Image
          src="/about.jpg"
          width={600}
          height={400}
          alt="about"
          className=""
        />
        <div className="flex flex-col items-start justify-center space-y-2 md:space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Image src="/kpi-logo.png" width={40} height={40} alt="about" />
            <h1
              className={`${robotoSlab.className} space-x-4 text-left text-xl font-bold text-[#001E43] md:text-4xl`}
            >
              About Kankai Polytechnic Institute
            </h1>
          </div>
          {/* <div className="flex flex-col items-start justify-center space-y-4"> */}
          <p className="p-1 text-justify text-sm leading-normal md:text-lg">
            At Adma, we believe in providing an exceptional educational
            experienc that prepares students for success in an ever-changing
            world. As a leading institution of higher learning, we are committed
            to fostering a vibrant academic community and empowering our
            students to reach their full potential. We are committed to
            fostering a vibrant academic community and empowering our students
            to reach their full potential.
          </p>
          <Link
            href="/about-us"
            className="flex items-center justify-center gap-2 rounded-none bg-white p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50]"
          >
            Read More <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
