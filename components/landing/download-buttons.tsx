"use client";

import { MacOSIcon } from "@/components/icons/macos-icon";
import { WindowsIcon } from "@/components/icons/windows-icon";
import { DOWNLOAD_URLS, GITHUB_REPOS } from "@/lib/download-urls";
import { ArrowDownToLine, BookOpen, Check, Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ReleaseAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface LatestRelease {
  version: string | null;
  htmlUrl: string;
  windowsUrl: string;
  macUrl: string;
  windowsSize: number | null;
  macSize: number | null;
}

const DEFAULT_RELEASE: LatestRelease = {
  version: null,
  htmlUrl: `${GITHUB_REPOS.app}/releases/latest`,
  windowsUrl: DOWNLOAD_URLS.windows,
  macUrl: DOWNLOAD_URLS.mac,
  windowsSize: null,
  macSize: null,
};

function useLatestRelease(): LatestRelease {
  const [release, setRelease] = useState<LatestRelease>(DEFAULT_RELEASE);
  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/repos/jometa9/IPTRADE-APP/releases/latest", {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then(
        (
          data: {
            tag_name?: string;
            html_url?: string;
            assets?: ReleaseAsset[];
          } | null
        ) => {
          if (cancelled || !data) return;
          const assets = data.assets ?? [];
          const win = assets.find((a) => a.name.endsWith(".exe"));
          const mac = assets.find((a) => a.name.endsWith(".dmg"));
          setRelease({
            version: data.tag_name?.replace(/^v/i, "") ?? null,
            htmlUrl: data.html_url ?? DEFAULT_RELEASE.htmlUrl,
            windowsUrl: win?.browser_download_url ?? DEFAULT_RELEASE.windowsUrl,
            macUrl: mac?.browser_download_url ?? DEFAULT_RELEASE.macUrl,
            windowsSize: win?.size ?? null,
            macSize: mac?.size ?? null,
          });
        }
      )
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return release;
}

const formatSize = (bytes: number | null) =>
  bytes ? `${(bytes / 1024 / 1024).toFixed(0)} MB` : null;

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
  const release = useLatestRelease();
  const versionLabel = release.version
    ? `Version ${release.version}`
    : "Latest version";

  const downloads = [
    {
      os: "Windows 64-bit",
      icon: WindowsIcon,
      href: release.windowsUrl,
      fileName: "IPTRADE-Setup.exe",
      description:
        "MT4, MT5 & cTrader — full multi-platform support on Windows.",
      size: formatSize(release.windowsSize),
    },
    {
      os: "macOS ARM64",
      icon: MacOSIcon,
      href: release.macUrl,
      fileName: "IPTRADE-Setup.dmg",
      description: "cTrader — native Apple Silicon build.",
      size: formatSize(release.macSize),
    },
  ];

  return (
    <section id="download" className={`scroll-mt-6 ${className}`}>
      <span id="prices" className="block -mt-24 pt-24" aria-hidden="true" />
      <div className="px-3 max-w-7xl mx-auto">
        <div className="mb-6 text-left">
          <p className="text-xl text-gray-600 mb-1">Download</p>
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
            {downloads.map(
              ({ os, icon: Icon, href, fileName, description, size }) => (
                <a
                  key={os}
                  href={href}
                  download={fileName}
                  rel="noopener noreferrer"
                  className="group text-left rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-5 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-3 min-w-0">
                      <div className="flex items-center gap-3">
                        <Icon className="h-7 w-7 text-white" />
                        <p className="text-2xl text-white">{os}</p>
                      </div>
                      <p className="text-sm text-gray-300">{description}</p>
                      <p className="text-xs text-gray-400">
                        {versionLabel} · {fileName}
                        {size ? ` · ${size}` : ""}
                      </p>
                    </div>
                    <ArrowDownToLine className="h-6 w-6 text-white shrink-0" />
                  </div>
                </a>
              )
            )}
          </div>

          <a
            href={release.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-5"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Github className="h-7 w-7 text-white shrink-0" />
              <div className="min-w-0">
                <p className="text-lg text-white">View all builds on GitHub</p>
                <p className="text-xs text-gray-400">
                  Every release asset, checksums and changelog.
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-300 underline shrink-0">
              Open repo
            </span>
          </a>

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
              href={GITHUB_REPOS.app}
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
