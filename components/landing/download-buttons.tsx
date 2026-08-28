"use client";

import { MacOSIcon } from "@/components/icons/macos-icon";
import { WindowsIcon } from "@/components/icons/windows-icon";
import { handleDownload } from "@/lib/download-handler";
import { ArrowDownToLine, BookOpen, Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function useLatestVersion(): string | null {
  const [version, setVersion] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/repos/jometa9/IPTRADE-APP/releases/latest", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { tag_name?: string } | null) => {
        const v = data?.tag_name?.replace(/^v/i, "");
        if (!cancelled && v) setVersion(v);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return version;
}

const FEATURES = [
  "Unlimited master and slave accounts",
  "Single IP—designed for prop firm rules",
  "100% local, zero cloud latency",
  "No subscription, no per-account fees, ever",
];

interface DownloadButtonsProps {
  className?: string;
}

export function DownloadButtons({ className = "" }: DownloadButtonsProps) {
  const latestVersion = useLatestVersion();
  return (
    <section id="download" className={`scroll-mt-6 ${className}`}>
      <span id="prices" className="block -mt-24 pt-24" aria-hidden="true" />
      <div className="px-3 max-w-7xl mx-auto">
        <div className="mb-6 text-left">
          <p className="text-xl text-gray-600 mb-1">Download &amp; Pricing</p>
          <h2 className="text-3xl md:text-5xl text-gray-900">
            Download IPTRADE —{" "}
            <span className="text-indigo-800">free forever.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 rounded-lg bg-indigo-800 p-6 overflow-hidden">
          <div className="min-w-0  mt-6">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl  text-white">$0</span>
              <span className="text-white/70">/forever</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-6">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-white/90"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleDownload("multi", "windows")}
              className="group text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-5 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3 min-w-0">
                  <div className="flex items-center gap-3">
                    <WindowsIcon className="h-7 w-7 text-white" />
                    <p className="text-2xl text-white">Windows 64-bit</p>
                  </div>
                  <p className="text-sm text-gray-300">
                    MT4, MT5 & cTrader — full multi-platform support on Windows.
                  </p>
                  <p className="text-xs text-gray-400">
                    {latestVersion ? `Version ${latestVersion}` : "Latest version"}
                  </p>
                </div>
                <ArrowDownToLine className="h-6 w-6 text-white shrink-0" />
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleDownload("multi", "mac")}
              className="group text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-5 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-3 min-w-0">
                  <div className="flex items-center gap-3">
                    <MacOSIcon className="h-7 w-7 text-white" />
                    <p className="text-2xl text-white">macOS ARM64</p>
                  </div>
                  <p className="text-sm text-gray-300">
                    cTrader — native Apple Silicon build.
                  </p>
                  <p className="text-xs text-gray-400">
                    {latestVersion ? `Version ${latestVersion}` : "Latest version"}
                  </p>
                </div>
                <ArrowDownToLine className="h-6 w-6 text-white shrink-0" />
              </div>
            </button>
          </div>

          <div className=" flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-3">
            <Link
              href="/documentation#installation-and-demo"
              target="_blank"
              rel="noopener noreferrer"
              prefetch={true}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors w-fit"
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>
                First time? View setup guide{" "}
                <span className="underline">here</span>
              </span>
            </Link>
            <Link
              href="https://github.com/jometa9/IPTRADE-APP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors w-fit"
            >
              100% open source — audit the code on{" "}
              <span className="underline">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
