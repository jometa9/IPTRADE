"use client";

import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

type SupportedPlatformsRowProps = {
  className?: string;
};

export function SupportedPlatformsRow({ className }: SupportedPlatformsRowProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-stretch justify-center max-w-7xl mx-auto pb-0 gap-3",
        className
      )}
    >
      <div className="w-full h-28 flex items-center justify-center bg-gray-100 rounded-lg px-6">
        <img
          src={asset("/assets/metatrader4.png")}
          alt="MetaTrader 4"
          className="max-h-full w-auto max-w-[50%] md:max-w-[50%] object-contain"
        />
      </div>

      <div className="w-full h-28 flex items-center justify-center bg-gray-100 rounded-lg px-6">
        <img
          src={asset("/assets/ctrader.svg")}
          alt="cTrader"
          className="max-h-full w-auto max-w-[40%] md:max-w-[40%] object-contain"
        />
      </div>

      <div className="w-full h-28 flex items-center justify-center bg-gray-100 rounded-lg px-6">
        <img
          src={asset("/assets/metatrader5.png")}
          alt="MetaTrader 5"
          className="max-h-full w-auto max-w-[50%] md:max-w-[50%] object-contain"
        />
      </div>

    </div>
  );
}
