// The site is served from a GitHub Pages project path (https://jometa9.github.io/IPTRADE),
// so raw references to files in /public must be prefixed with this base path.
// Keep in sync with `basePath` in next.config.mjs.
// next/image and next/link apply the base path automatically — do NOT wrap those.
export const BASE_PATH = "/IPTRADE";

export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
