export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export const faqsData: FAQItem[] = [
  {
    id: "what-is-multi",
    question: "What is IPTRADE Multi?",
    answer: `IPTRADE Multi is a local trade copier that runs on your computer. You set one account as Master and the rest as Slaves; trades are copied in real time with zero latency. Everything runs locally—no cloud, no external servers—so your data stays private and you keep a single IP for prop firm rules.`,
  },
  {
    id: "windows-mac",
    question: "Does it work on Windows and Mac?",
    answer: `Yes. On Windows we support MetaTrader 4, MetaTrader 5 (via Expert Advisor) and cTrader. On Mac we support cTrader. MetaTrader 4 and MetaTrader 5 require Windows because they use the MetaTrader terminal and Expert Advisor integration. The app is native for each OS.`,
  },
  {
    id: "prop-firm-safe",
    question: "Is it safe to use with prop firms?",
    answer: `IPTRADE Multi runs entirely on your machine, all copied accounts use the same IP, and no trade data is sent to external servers—so we're designed to help you meet typical IP restrictions. Other prop firm rules vary by firm; you must verify each firm's terms and do your own research. See our Terms of Use.`,
  },
  {
    id: "different-brokers",
    question: "Can I copy between different brokers or platforms?",
    answer: `Yes. You can copy between MT4, MT5, and cTrader. We handle symbol mapping, prefix/suffix, and lot size so you can match different broker naming and contract sizes.`,
  },
  {
    id: "latency-slippage",
    question: "What about latency and slippage?",
    answer: `Copying is local and in real time, so latency is zero. Slippage depends on your broker and market conditions; the copier sends the order as soon as the master trade is detected.`,
  },

  {
    id: "how-many-accounts",
    question: "How many accounts can I connect?",
    answer: `Unlimited. Connect as many master and slave accounts as you need with full configuration—no caps, no per-account fees. IPTRADE is 100% free for everyone.`,
  },
  {
    id: "why-free",
    question: "Why is IPTRADE free?",
    answer: `Honestly, to give back to the community. We built IPTRADE for ourselves first, after trying paid copiers that felt opaque or overpriced. Once it worked well, releasing it openly felt like the right call—our way of showing this space isn't only paywalls and recurring fees, and that there's room for serious tools built by traders, for traders. We cover our own infrastructure and updates; no trials, no upsell, no catch.`,
  },
  {
    id: "system-requirements",
    question: "What are the system requirements?",
    answer: `Windows: Windows 10/11, 8GB RAM, 2GB free disk. Mac: macOS Apple Silicon ARM64, 8GB RAM, 2GB free disk (cTrader only). The app is lightweight and runs locally.`,
  },
  {
    id: "vps-needed",
    question: "Do I need a VPS?",
    answer: `No. You can run IPTRADE Multi on your own PC or Mac. If you want 24/7 copying without keeping your computer on, you can install it on a Windows VPS (Mac VPS is also possible with cTrader).`,
  },
  {
    id: "data-privacy",
    question: "Is my trading data sent somewhere?",
    answer: `No. All copying happens on your computer. We don’t store or transmit your trades, logins, or account data to any server.`,
  },
  {
    id: "mac-only-ctrader",
    question: "What platforms are supported on Mac?",
    answer: `On Mac, IPTRADE supports cTrader only. MetaTrader 4 and MetaTrader 5 use the Windows terminal and Expert Advisor integration, so those require Windows.`,
  },
];
