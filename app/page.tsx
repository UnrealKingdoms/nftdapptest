import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Preview from "@/public/assets/images/nftPreview.png";
import Rarity from "@/public/assets/images/rarity.jpeg";

export default function page() {
  return (
    <div className="h-[calc(100vh-148px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 min-w-[250px] md:min-w-[300px]">
        <Link href={"/cayc"}>
          <Card className="bg-neutral-950 text-white border border-neutral-800">
            <CardHeader className="space-y-3 p-0">
              <Image
                className="rounded-lg w-[300px] h-auto"
                width={1280}
                src={Preview}
                height={720}
                quality={100}
                style={{
                  objectFit: "contain", // cover, contain, none
                  objectPosition: "20% 20%",
                }}
                priority
                alt="formica"
              />
              <div className="grid gap-1 pb-3">
                <div className="text-center font-light text-neutral-400">
                  Cyber Ape Yacht Club
                </div>
                <div className="text-center font-medium text-neutral-200">
                  Base Mint
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
        <Link href={"/cayc-rarity"}>
          <Card className="bg-neutral-950 text-white border border-neutral-800">
            <CardHeader className="space-y-3 p-0">
              <Image
                className="rounded-lg w-[300px] h-auto"
                width={1280}
                src={Rarity}
                height={720}
                quality={100}
                style={{
                  objectFit: "contain", // cover, contain, none
                  objectPosition: "20% 20%",
                }}
                priority
                alt="formica"
              />
              <div className="grid gap-1 pb-3">
                <div className="text-center font-light text-neutral-400">
                  Cyber Ape Yacht Club
                </div>
                <div className="text-center font-medium text-neutral-200">
                  Rarity Mint
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
