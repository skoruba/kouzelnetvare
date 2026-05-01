import { styles } from "../styles";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div style={styles.sectionTitle}>
      <div style={styles.eyebrow}>✨ {eyebrow}</div>
      <h2 style={styles.h2}>{title}</h2>
      {text ? <p style={styles.sectionText}>{text}</p> : null}
    </div>
  );
}
