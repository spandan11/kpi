import "@/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kankai Polytechnic Institute",
  description: "Made with ❤️ by Spandan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={`${GeistSans.variable}`}
      className={cn(
        "min-h-screen bg-background antialiased",
        poppins.className,
      )}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
