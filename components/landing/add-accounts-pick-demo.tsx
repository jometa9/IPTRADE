"use client";


import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

interface AddAccountsPickDemoProps {
  isWindows?: boolean;
}

const pickGroupClass =
  "mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-gray-50";

const pickConnectionRowClass =
  "group flex w-full min-w-0 items-center gap-4 p-5 transition-colors hover:bg-gray-100 cursor-pointer disabled:opacity-60";

function CtraderIcon() {
  return (
    <img
      src={asset("/assets/ctrader.svg")}
      alt=""
      aria-hidden
      className="mb-4 h-5.5"
    />
  );
}

function MtExpertIcon() {
  return (
    <div className="mb-3 flex items-center gap-3 self-end">
      <img
        src={asset("/assets/metatrader4.png")}
        alt=""
        aria-hidden
        className="-mr-1 -mt-1 h-7"
      />
      <img
        src={asset("/assets/metatrader5.png")}
        alt=""
        aria-hidden
        className="-mt-1 h-7"
      />
    </div>
  );
}

export function AddAccountsPickDemo({
  isWindows = true,
}: AddAccountsPickDemoProps) {
  return (
    <div className="relative flex min-h-full w-full flex-col items-stretch justify-center px-4 py-8 pb-16 text-gray-600 md:items-center">
      <div className="w-full max-w-2xl text-right md:mx-auto md:text-center">
        <p className="text-lg font-semibold text-gray-900">Add accounts</p>
        <p className="mt-2 text-right text-sm text-gray-600 md:mx-auto md:max-w-lg md:text-center">
          What platform do you use?
        </p>
      </div>
      <div className={cn(pickGroupClass, !isWindows ? "mb-16" : "mb-6")}>
        <div className="flex flex-col md:flex-row">
          <button
            type="button"
            className={cn(
              pickConnectionRowClass,
              "border-b border-gray-200 md:border-r md:border-b-0"
            )}
            aria-label="Continue with cTrader"
          >

            <div className="flex min-w-0 flex-1 flex-col items-end text-right">
              <CtraderIcon />
              <h3 className="text-lg font-semibold text-gray-900">cTrader</h3>
              <p className="mt-1 text-xs text-gray-600 max-w-[300px]">
                Sign in through your browser - accounts link automatically.
              </p>
            </div>
          </button>
          {isWindows ? (
            <button
              type="button"
              className={cn(pickConnectionRowClass)}
              aria-label="Continue with MetaTrader expert advisor"
            >

              <div className="flex min-w-0 flex-1 flex-col items-end text-right">
                <MtExpertIcon />
                <h3 className="text-lg font-semibold text-gray-900">
                  MetaTrader 4 & 5
                </h3>
                <p className="mt-1 text-xs text-gray-600 max-w-[300px]">
                  Requires MetaTrader installed and open - installs the IPTRADE
                  Expert Advisor in each platform.
                </p>
              </div>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
