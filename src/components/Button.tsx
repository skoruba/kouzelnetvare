import type { ReactNode } from "react";
import { styles } from "../styles";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
};

export function Button({ children, variant = "primary", href }: ButtonProps) {
  const style = {
    ...styles.button,
    ...(variant === "outline" ? styles.buttonOutline : styles.buttonPrimary),
    display: "inline-block" as const,
    textDecoration: "none" as const,
  };

  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" style={style}>
      {children}
    </button>
  );
}
