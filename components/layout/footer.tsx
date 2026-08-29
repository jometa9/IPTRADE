import Link from "next/link";
import { BrandFooterWatermark } from "@/components/layout/brand-footer-watermark";

export function Footer() {
  return (
    <footer className="w-full p-3 max-w-7xl mx-auto py-16" role="contentinfo">
      <div className="flex items-center gap-2 pt-2">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-black">IPTRADE</span>
        </Link>
        <BrandFooterWatermark />
      </div>
      <p className="text-sm text-gray-400 pt-1">
        Professional trading solutions
      </p>

      <div className="flex flex-wrap space-x-2 text-sm pt-2">
        <Link href="/legal" aria-label="Legal" className="text-gray-600">
          Legal
        </Link>
        <Link
          href="mailto:joaquinmetayer@gmail.com"
          aria-label="Support"
          className="text-gray-600"
        >
          Support
        </Link>
      </div>
      <div className="flex flex-wrap space-x-2 text-sm pt-2">
        <span className="text-gray-400">Open source (MIT):</span>
        <Link
          href="https://github.com/jometa9/IPTRADE-APP"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Desktop app source code on GitHub"
          className="text-gray-600"
        >
          App
        </Link>
        <Link
          href="https://github.com/jometa9/IPTRADE-BOTS"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MetaTrader bots source code on GitHub"
          className="text-gray-600"
        >
          MT4/MT5 Bots
        </Link>
        <Link
          href="https://github.com/jometa9/IPTRADE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Landing page source code on GitHub"
          className="text-gray-600"
        >
          Landing
        </Link>
      </div>
      <p className="text-sm text-gray-400 pt-2">
        Need help or have questions? Email us at joaquinmetayer@gmail.com
      </p>
    </footer>
  );
}
