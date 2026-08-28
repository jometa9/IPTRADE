"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PropFirmsDownloadCTAProps {
  label: string;
  variant?: "primary" | "ghost";
  size?: "default" | "lg";
}

export function PropFirmsDownloadCTA({
  label,
  variant = "primary",
  size = "default",
}: PropFirmsDownloadCTAProps) {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, "", "/prop-firms#download");
    }
  };

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={scrollToDownload}
        className="inline-block rounded-full border border-gray-300 bg-white px-4 py-2 text-xs text-gray-900 shadow-none hover:bg-gray-200 cursor-pointer transition-colors"
      >
        {label}
      </button>
    );
  }

  const sizeClasses =
    size === "lg"
      ? "mt-6 p-3 text-lg"
      : "mt-5 px-4 py-4 text-md";

  return (
    <Button
      type="button"
      onClick={scrollToDownload}
      className={`inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-black text-white transition-all duration-200 hover:bg-gray-600 ${sizeClasses}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
