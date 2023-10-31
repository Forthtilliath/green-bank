import type { Metadata } from "next";
import { Inter } from "next/font/google";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import "@/assets/css/globals.css";
import "@/assets/css/tailwind.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Bank",
  description: "Together for a green economy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" />
      </head>
      <body className={[inter.className, "min-h-screen h-screen"].join(" ")}>
        <div className="bg-[#171b22] xl:pb-10 min-h-screen">
          <Link href="/" className="w-full">
            <Image src={logo} alt="Logo" className="mx-auto" priority />
          </Link>
          <>{children}</>
        </div>
      </body>
    </html>
  );
}
