import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRightIcon, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProgramsSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2 px-2 pt-16 md:space-y-4 md:px-10 md:pt-20 lg:px-20 lg:pt-24">
      <h2
        className={`${robotoSlab.className} text-center text-xl font-bold text-[#001E43] md:text-4xl`}
      >
        Diploma & Pre diploma Programs
      </h2>
      {/* <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8"> */}
      <Tabs defaultValue="Diploma Programs" className="h-full w-full py-4">
        <TabsList className="grid w-full grid-cols-2 rounded-none bg-white">
          <TabsTrigger
            value="Diploma Programs"
            className="rounded-full border-2 border-transparent text-xs leading-normal data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none sm:text-sm"
          >
            Diploma Programs
          </TabsTrigger>
          <TabsTrigger
            value="Pre Diploma Programs"
            className="rounded-full border-2 border-transparent text-xs leading-normal data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none sm:text-sm"
          >
            Pre Diploma Programs
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Diploma Programs" className="w-full py-4">
          <Card className="w-full border-0 shadow-none">
            {/* <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader> */}
            <CardContent className="h-full w-full space-y-2 p-2">
              <div className="grid h-full w-full space-y-6 sm:grid-cols-5 sm:gap-4 sm:space-y-0">
                <div className="col-span-2 flex h-full w-full flex-col items-center justify-center space-y-4">
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:px-6 md:py-2">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Diploma in Civil Engineering
                      </h2>
                      <p className="text-justify text-sm leading-normal">
                        Build your future with our comprehensive and hands-on
                        civil engineering program.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:px-6 md:py-2">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Diploma in Geomatics Engineering
                      </h2>
                      <p className="text-justify text-sm leading-normal">
                        Explore the world of mapping and surveying with our
                        innovative geomatics engineering program.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:px-6 md:py-2">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Diploma in Information Technology
                      </h2>
                      <p className="text-justify text-sm leading-normal">
                        Empower your career with cutting-edge skills in our
                        dynamic IT engineering program.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 flex h-full w-full flex-col items-start justify-center space-y-2">
                  <Image
                    src="/diploma-program.jpg"
                    width={800}
                    height={800}
                    alt="about"
                    className="md:p-4 md:pr-0"
                  />
                  <div className="flex w-full flex-col items-start justify-start py-4 md:flex-row md:items-center md:justify-between md:pl-4">
                    <div className="flex flex-col items-start justify-center space-y-2 py-4">
                      <div className="flex items-center justify-center text-left">
                        <UsersRound className="mr-1 h-8 w-8 p-1 text-[#FA3F50] md:h-14 md:w-14" />
                        <h2
                          className={`${robotoSlab.className} text-2xl font-bold text-[#001E43] md:text-5xl`}
                        >
                          124+
                        </h2>
                      </div>
                      <p className="text-sm text-muted-foreground md:text-lg">
                        students already enrolled
                      </p>
                    </div>
                    <Link
                      href="/about-us"
                      className={`${robotoSlab.className} flex items-center justify-center gap-2 rounded-none bg-white p-2 text-sm font-semibold text-[#FA3F50] underline transition-all delay-300 duration-300 hover:text-red-500 md:text-lg`}
                    >
                      Know More
                      <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div> */}
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value="Pre Diploma Programs" className="w-full py-4">
          <Card className="w-full border-0 shadow-none">
            {/* <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader> */}
            <CardContent className="h-full w-full space-y-2 p-2">
              <div className="grid h-full w-full space-y-6 sm:grid-cols-5 sm:gap-4 sm:space-y-0">
                <div className="col-span-2 flex h-full w-full flex-col items-center justify-center space-y-4">
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:p-6">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Business Idea
                      </h2>
                      <p className="text-justify text-sm">
                        Business media refers to various forms media, including
                        print, and digital platforms in media.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:p-6">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Business Idea
                      </h2>
                      <p className="text-justify text-sm">
                        Business media refers to various forms media, including
                        print, and digital platforms in media.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="group flex h-full w-full flex-col items-center justify-center bg-muted transition-all duration-500 hover:bg-[#001E43] hover:text-white md:flex-row md:p-6">
                    <Image
                      src="/dit.jpg"
                      alt="dit"
                      width={150}
                      height={150}
                      className="h-full w-full md:h-[150px] md:w-[150px]"
                    />
                    <div className="flex flex-col items-start justify-center space-y-2 p-4">
                      <h2
                        className={`${robotoSlab.className} text-left text-lg font-bold text-[#001E43] group-hover:text-white`}
                      >
                        Business Idea
                      </h2>
                      <p className="text-justify text-sm">
                        Business media refers to various forms media, including
                        print, and digital platforms in media.
                      </p>
                      <Link
                        href="/about-us"
                        className="flex items-center justify-center gap-2 rounded-none bg-muted p-2 text-sm font-semibold text-[#FA3F50] underline transition-all duration-500 hover:text-[#FA3F50] group-hover:bg-[#001E43]"
                      >
                        Know More
                        <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 h-full w-full space-y-2">
                  <Image
                    src="/diploma-program.jpg"
                    width={800}
                    height={800}
                    alt="about"
                    className="md:p-4 md:pr-0"
                  />
                  <div className="flex flex-col items-start justify-start py-4 md:flex-row md:items-center md:justify-between md:pl-4">
                    <div className="flex flex-col items-start justify-center space-y-2 py-4">
                      <div className="flex items-center justify-center text-left">
                        <UsersRound className="mr-1 h-8 w-8 p-1 text-[#FA3F50] md:h-14 md:w-14" />
                        <h2
                          className={`${robotoSlab.className} text-2xl font-bold text-[#001E43] md:text-5xl`}
                        >
                          124+
                        </h2>
                      </div>
                      <p className="text-sm text-muted-foreground md:text-lg">
                        students already enrolled
                      </p>
                    </div>
                    <Link
                      href="/about-us"
                      className={`${robotoSlab.className} flex items-center justify-center gap-2 rounded-none bg-white p-2 text-sm font-semibold text-[#FA3F50] underline transition-all delay-300 duration-300 hover:text-red-500 md:text-lg`}
                    >
                      Know More
                      <ArrowRightIcon className="ml-1 h-6 w-6 p-1" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div> */}
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
      </Tabs>
      {/* <div className="flex flex-col items-center justify-center gap-4">
          <h3>Diploma in Civil Engineering</h3>
          <p>Re-usable components built using Radix UI and Tailwind CSS.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3>Diploma in Information Techology</h3>
          <p>How to install dependencies and structure your app.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3>Diploma in Geomatics Engineering</h3>
          <p>Styles for headings, paragraphs, lists...etc</p>
        </div> */}
    </div>
  );
};

export default ProgramsSection;
