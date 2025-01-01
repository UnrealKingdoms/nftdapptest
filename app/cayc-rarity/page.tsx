import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rarity from "@/public/assets/images/rarity.jpeg";
import Background from "@/public/assets/images/Background.png";
import Mint from "@/components/rarity/Mint";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cyber Ape Yacht Club - Rarity Mint",
};

export const dynamic = "force-dynamic";
export default async function Page() {
  return (
    <div>
      <div className="flex justify-center text-white py-14 md:py-10">
        <div className="w-5/6 md:w-3/4">
          <div className="mb-10 flex justify-center items-center">
            <div className="shadow-xl shadow-neutral-600">
              <Image
                className="rounded-lg w-[300px] h-auto "
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
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <h1 className="text-center font-bold text-2xl">
              Cyber Ape Yacht Club - Rarity Mint
            </h1>
          </div>
          <div className="flex justify-center items-center gap-x-3 my-4">
            <Link
              target="_blank"
              rel="norefferer"
              href={"https://twitter.com/CyberapeYacht"}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                />
              </svg>
            </Link>

            <Link
              target="_blank"
              rel="norefferer"
              href={"https://discord.gg/2PgcVhKh"}
            >
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="500"
                height="500"
                viewBox="0 0 50 50"
              >
                <path
                  className="fill-white"
                  d="M 18.90625 7 C 18.90625 7 12.539063 7.4375 8.375 10.78125 C 8.355469 10.789063 8.332031 10.800781 8.3125 10.8125 C 7.589844 11.480469 7.046875 12.515625 6.375 14 C 5.703125 15.484375 4.992188 17.394531 4.34375 19.53125 C 3.050781 23.808594 2 29.058594 2 34 C 1.996094 34.175781 2.039063 34.347656 2.125 34.5 C 3.585938 37.066406 6.273438 38.617188 8.78125 39.59375 C 11.289063 40.570313 13.605469 40.960938 14.78125 41 C 15.113281 41.011719 15.429688 40.859375 15.625 40.59375 L 18.0625 37.21875 C 20.027344 37.683594 22.332031 38 25 38 C 27.667969 38 29.972656 37.683594 31.9375 37.21875 L 34.375 40.59375 C 34.570313 40.859375 34.886719 41.011719 35.21875 41 C 36.394531 40.960938 38.710938 40.570313 41.21875 39.59375 C 43.726563 38.617188 46.414063 37.066406 47.875 34.5 C 47.960938 34.347656 48.003906 34.175781 48 34 C 48 29.058594 46.949219 23.808594 45.65625 19.53125 C 45.007813 17.394531 44.296875 15.484375 43.625 14 C 42.953125 12.515625 42.410156 11.480469 41.6875 10.8125 C 41.667969 10.800781 41.644531 10.789063 41.625 10.78125 C 37.460938 7.4375 31.09375 7 31.09375 7 C 31.019531 6.992188 30.949219 6.992188 30.875 7 C 30.527344 7.046875 30.234375 7.273438 30.09375 7.59375 C 30.09375 7.59375 29.753906 8.339844 29.53125 9.40625 C 27.582031 9.09375 25.941406 9 25 9 C 24.058594 9 22.417969 9.09375 20.46875 9.40625 C 20.246094 8.339844 19.90625 7.59375 19.90625 7.59375 C 19.734375 7.203125 19.332031 6.964844 18.90625 7 Z M 18.28125 9.15625 C 18.355469 9.359375 18.40625 9.550781 18.46875 9.78125 C 16.214844 10.304688 13.746094 11.160156 11.4375 12.59375 C 11.074219 12.746094 10.835938 13.097656 10.824219 13.492188 C 10.816406 13.882813 11.039063 14.246094 11.390625 14.417969 C 11.746094 14.585938 12.167969 14.535156 12.46875 14.28125 C 17.101563 11.410156 22.996094 11 25 11 C 27.003906 11 32.898438 11.410156 37.53125 14.28125 C 37.832031 14.535156 38.253906 14.585938 38.609375 14.417969 C 38.960938 14.246094 39.183594 13.882813 39.175781 13.492188 C 39.164063 13.097656 38.925781 12.746094 38.5625 12.59375 C 36.253906 11.160156 33.785156 10.304688 31.53125 9.78125 C 31.59375 9.550781 31.644531 9.359375 31.71875 9.15625 C 32.859375 9.296875 37.292969 9.894531 40.3125 12.28125 C 40.507813 12.460938 41.1875 13.460938 41.8125 14.84375 C 42.4375 16.226563 43.09375 18.027344 43.71875 20.09375 C 44.9375 24.125 45.921875 29.097656 45.96875 33.65625 C 44.832031 35.496094 42.699219 36.863281 40.5 37.71875 C 38.5 38.496094 36.632813 38.84375 35.65625 38.9375 L 33.96875 36.65625 C 34.828125 36.378906 35.601563 36.078125 36.28125 35.78125 C 38.804688 34.671875 40.15625 33.5 40.15625 33.5 C 40.570313 33.128906 40.605469 32.492188 40.234375 32.078125 C 39.863281 31.664063 39.226563 31.628906 38.8125 32 C 38.8125 32 37.765625 32.957031 35.46875 33.96875 C 34.625 34.339844 33.601563 34.707031 32.4375 35.03125 C 32.167969 35 31.898438 35.078125 31.6875 35.25 C 29.824219 35.703125 27.609375 36 25 36 C 22.371094 36 20.152344 35.675781 18.28125 35.21875 C 18.070313 35.078125 17.8125 35.019531 17.5625 35.0625 C 16.394531 34.738281 15.378906 34.339844 14.53125 33.96875 C 12.234375 32.957031 11.1875 32 11.1875 32 C 10.960938 31.789063 10.648438 31.699219 10.34375 31.75 C 9.957031 31.808594 9.636719 32.085938 9.53125 32.464844 C 9.421875 32.839844 9.546875 33.246094 9.84375 33.5 C 9.84375 33.5 11.195313 34.671875 13.71875 35.78125 C 14.398438 36.078125 15.171875 36.378906 16.03125 36.65625 L 14.34375 38.9375 C 13.367188 38.84375 11.5 38.496094 9.5 37.71875 C 7.300781 36.863281 5.167969 35.496094 4.03125 33.65625 C 4.078125 29.097656 5.0625 24.125 6.28125 20.09375 C 6.90625 18.027344 7.5625 16.226563 8.1875 14.84375 C 8.8125 13.460938 9.492188 12.460938 9.6875 12.28125 C 12.707031 9.894531 17.140625 9.296875 18.28125 9.15625 Z M 18.5 21 C 15.949219 21 14 23.316406 14 26 C 14 28.683594 15.949219 31 18.5 31 C 21.050781 31 23 28.683594 23 26 C 23 23.316406 21.050781 21 18.5 21 Z M 31.5 21 C 28.949219 21 27 23.316406 27 26 C 27 28.683594 28.949219 31 31.5 31 C 34.050781 31 36 28.683594 36 26 C 36 23.316406 34.050781 21 31.5 21 Z M 18.5 23 C 19.816406 23 21 24.265625 21 26 C 21 27.734375 19.816406 29 18.5 29 C 17.183594 29 16 27.734375 16 26 C 16 24.265625 17.183594 23 18.5 23 Z M 31.5 23 C 32.816406 23 34 24.265625 34 26 C 34 27.734375 32.816406 29 31.5 29 C 30.183594 29 29 27.734375 29 26 C 29 24.265625 30.183594 23 31.5 23 Z"
                ></path>
              </svg>
            </Link>

            <Link target="_blank" rel="norefferer" href={"https://cayc.io"}>
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.747 18.177C14.485 16.699 15 14.518 15 12s-.515-4.7-1.253-6.177C12.948 4.226 12.215 4 12 4c-.215 0-.948.226-1.747 1.823C9.515 7.301 9 9.482 9 12s.515 4.7 1.253 6.177C11.052 19.774 11.785 20 12 20c.215 0 .948-.226 1.747-1.823zM12 22c2.761 0 5-4.477 5-10S14.761 2 12 2 7 6.477 7 12s2.239 10 5 10z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.95 13a10.106 10.106 0 000-2H2.05a10.118 10.118 0 000 2h19.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>

          <Mint />
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md w-full mt-10 lg:mt-16 gap-y-10">
            <article className="prose lg:prose-sm prose-h3:text-xl prose-h3:font-bold w-full lg:w-[90%]">
              <h3 className="text-white">
                About Cyber Ape Yacht Club - Rarity Club
              </h3>
              <p className="text-neutral-500 font-medium">
                Cyber Ape Yacht Club (CAYC) is all about Utility, Reimagined.
              </p>
              <p className="text-neutral-500 font-medium">
                Our Rarity Mint is designed to provide added utility - specific,
                rare characteristics or traits.
              </p>
              <p className="text-neutral-500 font-semibold">
                We are allowing holders to pick n choose the reward traits as
                first the holder interest. Your selection will be made through
                the CAYC Rarity Dashboard.
              </p>
              <p className="text-neutral-500 font-semibold">
                <span className="text-neutral-500 text-base font-bold">
                  Selections will include options from:
                </span>
                <li>
                  Sharing additional benefits within our online gambling
                  platform GambleStakes
                </li>
                <li>Sharing community marketing pools from CAYC Cases </li>
                <li>
                  Sharing community marketing pools from Atlas World Sports{" "}
                </li>
                <li>
                  Sharing community marketing pools from specific partner
                  metaverses
                </li>
                <li>Special rarity events and more</li>
              </p>
              <p className="text-neutral-500 font-semibold">
                Purchase of a CAYC Rarity mint is not a financial investment, it
                is a membership ownership plan with rewards that are issued
                based on conditions being met. CAYC does not provide financial
                advise, do your own research. CAYC is a Cyprus Company owned by
                - Eight Galaxies B.V.
              </p>
            </article>
            <div className="flex justify-start items-center">
              <Image
                className="rounded-lg w-full h-auto"
                width={800}
                src={Background}
                height={800}
                alt="Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
