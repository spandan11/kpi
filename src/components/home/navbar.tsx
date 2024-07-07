"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { AlignRight, Menu, Search, ShoppingCart, User2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import SiteLogo from "@/components/global/site-logo";
import { NavMenu } from "./nav-menu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-auto w-full items-center justify-between gap-4 bg-white px-4 py-4 shadow-md backdrop-blur-md md:px-10 lg:h-20 lg:px-20">
      <SiteLogo />
      <div className="ml-auto hidden gap-8 lg:flex lg:flex-row lg:items-center lg:justify-center">
        <NavMenu />
        {/* {Routes.map((route) => (
          <Link
            href={route.href}
            className="text-base text-muted-foreground hover:text-primary"
            key={route.label}
          >
            {route.label}
          </Link>
        ))} */}
      </div>
      <Button variant="ghost" size="icon" className="lg:hidden">
        <AlignRight className="h-8 w-8 p-1 text-foreground transition" />
      </Button>
      {/* <div className="relative hidden flex-1 px-20 md:flex">
        <Input placeholder="Search..." className="h-12" />
        <Button
          size="icon"
          className="absolute right-20 top-1 transition-all"
          asChild
        >
          <Search className="h-10 w-10 cursor-pointer stroke-2 p-1 text-foreground transition" />
        </Button>
      </div> */}
      {/* <Button variant="ghost" className="p-2 lg:hidden">
        <Menu className="h-7 w-7 p-1 text-foreground transition" />
      </Button>

      <Button variant="outline" size="lg" className="hidden lg:block" asChild>
        <Link href="/application" className="">
          Apply Now
        </Link>
      </Button> */}
      {/* <div className="flex items-center justify-center gap-0 md:gap-2">
        <div className="flex h-screen w-screen items-center justify-center bg-black"> */}
      {/* <div className="group relative inline-flex"> */}
      {/* <div className="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div> */}
      {/* <a
          href="#"
          title="Get quote now"
          className="relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          role="button"
        >
          Apply&nbsp;Now
        </a> */}
      {/* </div>
        </div> */}
      {/* <SearchProductDialog
          trigger={
            <Search className="h-7 w-7 p-1 text-foreground transition" />
          }
        />
        <Button size="icon" variant="ghost" asChild>
          <Link href={data?.user ? "/dashboard" : "/auth/sign-in"}>
            <User2 className="h-7 w-7 p-1 text-foreground transition" />
          </Link>
        </Button>
        <Cart
          trigger={
            <Button size="icon" variant="ghost" className="relative">
              <ShoppingCart className="h-7 w-7 p-1 text-foreground transition" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {0}
              </span>
            </Button>
          }
        /> */}
      {/* </div> */}
    </header>
  );
};

export default Navbar;
