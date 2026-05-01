import type { ReactNode } from "react";
import { styles } from "../styles";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        ...styles.button,
        ...(variant === "outline"
          ? styles.buttonOutline
          : styles.buttonPrimary),
      }}
    >
      {children}
    </button>
  );
}
