export type DownloadOS = "windows" | "mac";

export type DownloadUrls = Record<DownloadOS, string>;

// Everything is open source — the app repo's latest GitHub Release hosts the installers.
export const GITHUB_ORG = "jometa9";
export const GITHUB_REPOS = {
  landing: `https://github.com/${GITHUB_ORG}/IPTRADE`,
  app: `https://github.com/${GITHUB_ORG}/IPTRADE-APP`,
  bots: `https://github.com/${GITHUB_ORG}/IPTRADE-BOTS`,
} as const;

export const DOWNLOAD_URLS: DownloadUrls = {
  windows: `${GITHUB_REPOS.app}/releases/latest/download/IPTRADE-Setup.exe`,
  mac: `${GITHUB_REPOS.app}/releases/latest/download/IPTRADE-Setup.dmg`,
};

export const getDownloadUrl = (os: DownloadOS): string => DOWNLOAD_URLS[os];
