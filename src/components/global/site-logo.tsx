import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SiteLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex h-auto items-center text-balance font-semibold md:gap-2",
        className,
        robotoSlab.className,
      )}
    >
      {/* <Package2Icon className="h-6 w-6 text-primary" /> */}
      <Image
        src="/kpi-logo.png"
        alt="Kankai Polytechnic Institute"
        width={60}
        height={60}
        className="h-[60px] w-[60px] object-contain"
      />
      <div className="text-balance p-1 text-[#001E43] md:text-nowrap">
        {/* <h2 className="text-lg">कन्काई पोलिटेक्निक इन्स्टिच्युट</h2>
        <p className="text-xs">कन्काई नगरपालिकाद्वारा संचलित</p> */}
        <h2 className="text-sm font-bold uppercase sm:text-lg md:text-xl">
          Kankai Polytechnic Institute
        </h2>
        <p className="text-nowrap text-[8px] font-normal capitalize text-black md:text-xs">
          Operated by Kankai Municipality
        </p>
      </div>
    </Link>
  );
};

export default SiteLogo;
