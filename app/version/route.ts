import { NextResponse } from "next/server";
import { DOWNLOAD_URLS } from "@/lib/download-urls";

export const dynamic = "force-static";

// Legacy endpoint: app versions <= 4.1.x poll this URL for updates. Newer
// versions query the GitHub Releases API directly. The download URLs always
// point at the latest release, so legacy clients still get current installers.
const LEGACY_VERSION = "4.2.0";

export function GET() {
  return NextResponse.json({
    version: LEGACY_VERSION,
    downloads: DOWNLOAD_URLS,
  });
}
