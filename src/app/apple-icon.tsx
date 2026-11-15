import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    // biome-ignore lint/a11y/noSvgWithoutTitle: rendered to a PNG, not shown in the DOM
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="180"
      height="180"
    >
      <rect width="64" height="64" fill="#121210" />
      <path
        d="M13 51 32 12 51 51M21.5 38h21"
        fill="none"
        stroke="#f3f2ee"
        strokeWidth="7"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>,
    size,
  );
}
