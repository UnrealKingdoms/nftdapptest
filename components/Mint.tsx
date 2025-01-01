"use client";
import React from "react";
import MintCard from "./MintCard";
import { useReadContract } from "wagmi";
import { mainnet } from "viem/chains";
import { CAYC_NFT_ABI } from "@/config/ABI/CAYC_NFT_ABI";
import { CAYC_NFT_ADDRESS } from "@/config/addresses";
import { formatEther } from "viem";

export default function Mint() {
  const result = useReadContract({
    chainId: mainnet.id,
    abi: CAYC_NFT_ABI,
    address: CAYC_NFT_ADDRESS,
    functionName: "totalSupply",
  });

  const priceResult = useReadContract({
    chainId: mainnet.id,
    abi: CAYC_NFT_ABI,
    address: CAYC_NFT_ADDRESS,
    functionName: "cost",
  });

  return (
    <div>
      <div className="flex justify-center mt-5 mb-20">
        <div className="stats banner-shadowMain bg-neutral-900 rounded-md">
          <div className="stat">
            <div className="stat-title text-gray-400 font-medium text-center">
              MINT START
            </div>
            <div className="stat-value text-white text-2xl mt-2">
              <span>{"15 MAR 2024"}</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-400 font-medium text-center">
              MINT END
            </div>
            <div className="stat-value text-white text-2xl mt-2 text-center">
              <span>{"OPEN"}</span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-400 font-medium">
              MINT PRICE
            </div>
            <div className="stat-value text-white text-2xl mt-2">
              <span>
                {priceResult.status == "success" &&
                  formatEther(BigInt(priceResult.data as bigint))}{" "}
                ETH
              </span>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-400 font-medium">AMOUNT</div>
            <div className="stat-value text-white text-2xl mt-2 text-center">
              {Number(10000).toLocaleString("en-US")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center mt-10">
        <MintCard
          status={result.status}
          data={result.data}
          priceStatus={priceResult.status}
          priceData={priceResult.data}
        />
      </div>
    </div>
  );
}
