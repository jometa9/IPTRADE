import { DownloadOS, getDownloadUrl } from "@/lib/download-urls";

export type ProductKey = "multi";
export type { DownloadOS };

export const detectOS = (): DownloadOS => {
  if (typeof window === "undefined") return "windows";

  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes("mac")) return "mac";
  return "windows";
};

export const handleDownload = async (
  _productKey: ProductKey = "multi",
  os?: DownloadOS
) => {
  const detectedOS = os || detectOS();
  const downloadUrl = getDownloadUrl(detectedOS);

  if (!downloadUrl) {
    alert("Download link is not configured yet. Please try again later.");
    return;
  }

  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = detectedOS === "mac" ? "IPTRADE-Setup.dmg" : "IPTRADE-Setup.exe";
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
