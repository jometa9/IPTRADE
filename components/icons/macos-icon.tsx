import { asset } from "@/lib/asset";
export function MacOSIcon({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="macOS"
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${asset("/assets/apple-logo.png")})`,
        maskImage: `url(${asset("/assets/apple-logo.png")})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
