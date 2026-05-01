import { colors } from "../theme";

type BrushIconProps = {
  size?: number;
};

export function BrushIcon({ size = 34 }: BrushIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <path
        d="M31 4l13 13-18 18c-3 3-7 5-12 5H8v-6c0-5 2-9 5-12L31 4Z"
        fill={colors.pink}
      />
      <path
        d="M30 5l13 13M13 34c-2 4-5 7-10 8"
        fill="none"
        stroke={colors.purple}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M25 35l-12-12"
        stroke={colors.purple}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
