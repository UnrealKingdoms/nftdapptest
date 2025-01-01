"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Logo from "@/public/assets/images/CAYCLogo.png";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between w-[100vw] max-w-[95vw] py-4">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image className="w-16 h-auto" src={Logo} alt="logo" />
          </Link>

          <h1 className="font-bold text-white text-xl hidden md:block">
            Cyber Ape Yacht Club
          </h1>
          <h1 className="font-bold text-white md:hidden block">CAYC</h1>
        </div>

        <ConnectButton accountStatus={"full"} showBalance />
      </div>
    </div>
  );
};
