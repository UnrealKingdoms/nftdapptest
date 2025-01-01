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

export default function Withdraw() {
  const { writeContract } = useWriteContract();

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

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen h-[calc(100vh-148px)] flex justify-center items-center">
        <div className=" md:w-[800px] rounded-md w-full gap-y-10">
          <Card className="bg-transparent border-none shadow-none bg-neutral-900 text-white">
            <CardHeader className="gap-4">
              <CardTitle className="text-white">BASE Public Stage</CardTitle>
              <CardDescription>Withdraw Ether *(owner)</CardDescription>
              <div className="flex gap-x-2 items-center">
                <div className="w-full">
                  <Button
                    disabled={loading}
                    onClick={() =>
                      writeContract(
                        {
                          abi: CAYC_NFT_ABI,
                          address: CAYC_NFT_ADDRESS,
                          functionName: "withdraw",
                        },
                        {
                          onError(error) {
                            toast.error(error.message);
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
                    {loading ? "Withdrawing..." : "Withdraw"}
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
