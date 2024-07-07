import Link from "next/link";
import {
  BookText,
  GraduationCap,
  SquareUserRound,
  ArrowRightIcon,
} from "lucide-react";

const HighLightSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-2 pt-16 md:flex-row md:px-10 md:pt-20 lg:px-20 lg:pt-24">
      <div className="grid w-full grid-cols-1 space-y-6 md:grid-cols-3 md:space-y-0">
        <div className="flex flex-col items-center bg-[#001E43] py-6 text-white shadow-lg">
          <div className="mt-2 flex items-center justify-center text-3xl font-bold md:mt-4 md:text-5xl">
            <GraduationCap className="mr-2 h-14 w-14 stroke-[0.75] text-yellow-400 md:h-16 md:w-16" />
            124+
          </div>
          <h3 className="mt-2 text-sm md:mt-4 md:text-lg">
            We Have online Programs
          </h3>
          <Link
            href="#"
            className="mt-2 flex items-center justify-center text-[#FA3F50] underline hover:text-red-500 md:mt-4"
          >
            Know More <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
          </Link>
        </div>
        <div className="flex flex-col items-center bg-[#FFC333] py-6 text-[#001E43] shadow-lg">
          <div className="mt-2 flex items-center justify-center text-3xl font-bold md:mt-4 md:text-5xl">
            <BookText className="mr-2 h-14 w-14 stroke-[0.75] text-[#001E43] md:h-16 md:w-16" />
            393+
          </div>
          <h3 className="mt-2 text-sm md:mt-4 md:text-lg">
            We have the best Courses
          </h3>
          <Link
            href="#"
            className="mt-2 flex items-center justify-center text-[#FA3F50] underline hover:text-red-500 md:mt-4"
          >
            Know More <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
          </Link>
        </div>
        <div className="flex flex-col items-center bg-[#001E43] py-6 text-white shadow-lg">
          <div className="mt-2 flex items-center justify-center text-3xl font-bold md:mt-4 md:text-5xl">
            <SquareUserRound className="mr-2 h-12 w-12 stroke-[0.75] text-white md:h-16 md:w-16" />
            865+
          </div>
          <h3 className="mt-2 text-sm md:mt-4 md:text-lg">
            Adma Has Professional Teacher
          </h3>
          <Link
            href="#"
            className="mt-2 flex items-center justify-center text-[#FA3F50] underline hover:text-red-500 md:mt-4"
          >
            Know More <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighLightSection;
