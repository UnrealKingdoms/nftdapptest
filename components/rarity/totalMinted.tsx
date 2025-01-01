"use client";

import { Progress } from "@/components/ui/progress";
import { numberWithCommas } from "@/utils/numWithCommas";
import React from "react";

export default function TotalMinted({ status, data }: any) {
  return (
    <div className="flex flex-col gap-y-2 max-w-[100%] lg:max-w-[90%]">
      <div className="flex flex-row justify-between">
        <h2 className="font-normal text-neutral-400">
          {status == "success" && numberWithCommas((Number(data) * 100) / 500)}%
          minted
        </h2>

        <h2 className="font-normal text-neutral-400">
          {status == "success" &&
            Number(data).toLocaleString(undefined, {
              minimumFractionDigits: 0, // Ensure at least 2 decimal places
              maximumFractionDigits: 0, // Ensure at most 2 decimal places
              useGrouping: true, // Add commas as thousand separators
            })}{" "}
          /{" "}
          {Number(500).toLocaleString(undefined, {
            minimumFractionDigits: 0, // Ensure at least 2 decimal places
            maximumFractionDigits: 0, // Ensure at most 2 decimal places
            useGrouping: true, // Add commas as thousand separators
          })}
        </h2>
      </div>
      <Progress value={status == "success" ? (Number(data) * 100) / 500 : 0} />
    </div>
  );
}