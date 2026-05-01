import type { ReactNode } from "react";
import { styles } from "../styles";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
};

export function Card({ children, featured = false }: CardProps) {
  return (
    <div
      style={{
        ...styles.card,
        ...(featured ? styles.cardFeatured : {}),
      }}
    >
      {children}
    </div>
  );
}
