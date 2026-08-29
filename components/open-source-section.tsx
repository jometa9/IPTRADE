"use client";

import { Check, Code, Copy, Github, Scale } from "lucide-react";
import { useState } from "react";
import { GITHUB_ORG, GITHUB_REPOS } from "@/lib/download-urls";

interface Repo {
  name: string;
  url: string;
  title: string;
  description: string;
  tagline: string;
  topics: string[];
  language: string;
  languageColor: string;
  cardClass: string;
  reversed: boolean;
}

const REPOS: Repo[] = [
  {
    name: "IPTRADE-APP",
    url: GITHUB_REPOS.app,
    title: "The desktop app",
    description:
      "The Electron app you download: the local copy engine, the account manager and the cTrader OAuth flow. Everything runs on your machine, so you can audit exactly what touches your accounts before you run it.",
    tagline: "Local trade copier desktop app for MT4, MT5 and cTrader.",
    topics: ["electron", "typescript", "react", "trade-copier"],
    language: "TypeScript",
    languageColor: "#3178c6",
    cardClass: "bg-[#0d1117]",
    reversed: false,
  },
  {
    name: "IPTRADE-BOTS",
    url: GITHUB_REPOS.bots,
    title: "The MetaTrader bots",
    description:
      "The Expert Advisors IPTRADE installs into MetaTrader 4 and 5, plus the bridge that talks to the desktop app. Read the order logic line by line — no obfuscated binaries, no hidden network calls.",
    tagline: "Expert Advisors and bridge that connect MetaTrader to IPTRADE.",
    topics: ["mql4", "mql5", "expert-advisor", "metatrader"],
    language: "MQL5",
    languageColor: "#f34b7d",
    cardClass: "bg-[#0c2d6b]",
    reversed: true,
  },
  {
    name: "IPTRADE",
    url: GITHUB_REPOS.landing,
    title: "This website",
    description:
      "The site you are reading, including the docs and the legal pages. Fully static — no backend, no database, no analytics — built with Next.js and published straight to GitHub Pages.",
    tagline: "Marketing site and documentation for IPTRADE.",
    topics: ["nextjs", "react", "tailwindcss", "github-pages"],
    language: "TypeScript",
    languageColor: "#3178c6",
    cardClass: "bg-[#3c1e70]",
    reversed: false,
  },
];

function RepoCardDemo({ repo }: { repo: Repo }) {
  const [copied, setCopied] = useState(false);
  const cloneCommand = `git clone ${repo.url}.git`;

  const copyCloneCommand = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-full min-h-[280px] w-full flex-col rounded-lg border border-[#30363d] bg-[#010409] shadow-lg">
      <div className="flex items-center gap-2 border-b border-[#30363d] px-4 py-3">
        <Github className="h-4 w-4 shrink-0 text-[#8b949e]" />
        <span className="min-w-0 truncate text-sm text-[#8b949e]">
          {GITHUB_ORG} /{" "}
          <span className="font-semibold text-[#58a6ff]">{repo.name}</span>
        </span>
        <span className="ml-auto shrink-0 rounded-full border border-[#30363d] px-2 py-0.5 text-[11px] text-[#8b949e]">
          Public
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-3 text-sm text-[#8b949e]">{repo.tagline}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-[#388bfd26] px-2.5 py-0.5 text-[11px] text-[#4493f8]"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mb-4 flex items-center gap-2 rounded-md border border-[#30363d] bg-[#0d1117] pl-3 pr-1 py-1">
          <div className="min-w-0 flex-1 overflow-x-auto py-1">
            <code className="whitespace-nowrap font-mono text-xs text-[#c9d1d9]">
              <span className="text-[#8b949e]">$ </span>
              {cloneCommand}
            </code>
          </div>
          <button
            type="button"
            onClick={copyCloneCommand}
            aria-label={copied ? "Copied" : `Copy clone command for ${repo.name}`}
            className="shrink-0 cursor-pointer rounded-md p-1.5 text-[#8b949e] transition-colors hover:bg-[#30363d] hover:text-[#c9d1d9]"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-[#3fb950]" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: repo.languageColor }}
            />
            {repo.language}
          </span>
          <span className="flex items-center gap-1.5">
            <Scale className="h-3.5 w-3.5" />
            MIT License
          </span>
        </div>

        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#238636] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2ea043]"
        >
          <Code className="h-4 w-4" />
          View {repo.name} on GitHub
        </a>
      </div>
    </div>
  );
}

export function OpenSourceSection() {
  return (
    <section id="open-source" className="overflow-x-hidden scroll-mt-24">
      <div className="px-3 max-w-7xl mx-auto">
        <p className="text-gray-600 text-xl mb-1">Open source</p>
        <h2 className="text-6xl text-gray-900 mb-6">Read every line</h2>

        {REPOS.map((repo) => (
          <div
            key={repo.name}
            data-repo={repo.name}
            className={`rounded-lg p-6 mb-6 max-w-full overflow-x-hidden box-border ${repo.cardClass}`}
          >
            <div
              className={`grid grid-cols-1 gap-8 ${
                repo.reversed
                  ? "xl:grid-cols-[1fr_40%]"
                  : "xl:grid-cols-[40%_1fr]"
              }`}
            >
              <div
                className={`min-w-0 xl:px-6 pb-6 ${
                  repo.reversed ? "order-1 xl:order-2" : "order-1 xl:order-1"
                }`}
              >
                <div className="mb-6 mt-6">
                  <h3 className="text-4xl text-white">{repo.title}</h3>
                </div>
                <p className="text-gray-200">{repo.description}</p>
              </div>

              <div
                className={`min-w-0 xl:w-full ${
                  repo.reversed ? "order-2 xl:order-1" : "order-2 xl:order-2"
                }`}
              >
                <RepoCardDemo repo={repo} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
