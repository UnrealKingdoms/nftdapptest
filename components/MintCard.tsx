"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { CAYC_NFT_ABI } from "@/config/ABI/CAYC_NFT_ABI";

import { Skeleton } from "@/components/ui/skeleton";
import {
  useWaitForTransactionReceipt,
  useWatchPendingTransactions,
  useWriteContract,
} from "wagmi";
import dynamic from "next/dynamic";
import { formatEther } from "viem";

import { CAYC_NFT_ADDRESS } from "@/config/addresses";
import { toast } from "sonner";

const TotalMinted = dynamic(() => import("./totalMinted"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-y-2 max-w-[90%] ">
      <div className="flex flex-row justify-between">
        <Skeleton className="w-[80px] h-[25px] rounded-lg" />

        <Skeleton className="w-[75px] h-[25px] rounded-lg" />
      </div>
      <Progress value={0} />
    </div>
  ),
});

type ContractErrors =
  | "SoldOut"
  | "InvalidAmount"
  | "TX_LIMIT_REACHED"
  | "WALLET_LIMIT_REACHED"
  | "InsufficientEther";

export default function MintCard({
  status,
  data,
  priceStatus,
  priceData,
}: any) {
  const { writeContract } = useWriteContract();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);

  const result = useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    setLoading(result.isLoading);
  }, [result.isLoading]);

  useEffect(() => {
    if (result.status == "success") {
      toast.success("You've successfully minted your CAYC!");
    }
  }, [result.status]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md w-full gap-y-10">
      <TotalMinted status={status} data={data} />

      <Card className="bg-transparent border-none shadow-none bg-neutral-900 text-white">
        <CardHeader className="gap-4">
          <CardTitle className="text-white">Public Stage</CardTitle>
          <CardDescription>
            {" "}
            {priceStatus == "success" &&
              formatEther(BigInt(priceData as bigint))}{" "}
            ETH
          </CardDescription>
          <div className="flex gap-x-2 items-center">
            <div className="flex gap-x-0">
              <Button
                onClick={handleQuantityDecrease}
                className=" bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80 rounded-r-none rounded-l-xl"
              >
                <Minus className="w-4 h-auto" />
              </Button>
              <Input
                type="number"
                className="w-[50px] border-none shadow-none rounded-none py-0 px-0 focus-visible:ring-0 text-center bg-neutral-800"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
              <Button
                onClick={handleQuantityIncrease}
                className="bg-neutral-800 text-neutral-50 hover:bg-neutral-800/80 rounded-l-none rounded-r-xl"
              >
                <Plus className="w-4 h-auto" />
              </Button>
            </div>
            <div className="w-full">
              <Button
                disabled={priceStatus !== "success" || quantity <= 0 || loading}
                onClick={() =>
                  writeContract(
                    {
                      abi: CAYC_NFT_ABI,
                      address: CAYC_NFT_ADDRESS,
                      functionName: "mint",
                      args: [BigInt(quantity)],
                      value: BigInt(quantity) * BigInt(priceData),
                    },
                    {
                      onError(error) {
                        const errorFromHook = error as any;

                        if (
                          errorFromHook &&
                          errorFromHook.cause &&
                          errorFromHook.cause.name ==
                            "ContractFunctionRevertedError"
                        ) {
                          if (errorFromHook.cause.data) {
                            const contractError: ContractErrors =
                              errorFromHook.cause.data.errorName;
                            switch (contractError) {
                              case "InsufficientEther":
                                toast.error("Insufficient Ether provided");
                                break;

                              case "InvalidAmount":
                                toast.error("Invalid mint quantity");
                                break;
                              case "SoldOut":
                                toast.error("Formica Regeem has sold out");
                                break;

                              default:
                                if (
                                  errorFromHook.shortMessage ||
                                  errorFromHook.message
                                ) {
                                  toast.error(
                                    errorFromHook.shortMessage
                                      ? errorFromHook.shortMessage
                                      : errorFromHook.message &&
                                          errorFromHook.message
                                  );
                                }

                                break;
                            }
                          }
                        } else {
                          toast.error(
                            errorFromHook.shortMessage
                              ? errorFromHook.shortMessage
                              : errorFromHook.message && errorFromHook.message
                          );
                        }
                      },
                      onSuccess(data) {
                        setTxHash(data);
                      },
                    }
                  )
                }
                className="w-full bg-blue-600 rounded-xl hover:bg-blue-600/80"
                variant={"default"}
              >
                {loading ? "Minting..." : "Mint"}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
