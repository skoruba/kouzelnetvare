import { packages } from "../theme";
import { styles } from "../styles";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";

export function PricingSection() {
  return (
    <section
      id="cenik"
      style={{
        ...styles.section,
        background: "rgba(255,241,246,0.76)",
      }}
    >
      <SectionTitle
        eyebrow="Orientační ceník"
        title="Jednoduše a férově"
        text="Ceny se dají přizpůsobit typu akce, počtu dětí a délce programu."
      />

      <div style={styles.grid3}>
        {packages.map((item) => (
          <Card key={item.name} featured={Boolean(item.badge)}>
            {item.badge ? <div style={styles.badge}>{item.badge}</div> : null}
            <h3 style={styles.h3}>{item.name}</h3>
            <div style={styles.price}>{item.price}</div>
            <p style={styles.cardText}>{item.text}</p>
          </Card>
        ))}
      </div>

      <p style={styles.note}>
        Pro akce mimo Prahu je možné připočítat dopravu podle vzdálenosti.
        Přesná cena se vždy potvrdí předem podle termínu a místa.
      </p>
    </section>
  );
}
