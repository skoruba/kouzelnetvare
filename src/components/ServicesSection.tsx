import { services } from "../theme";
import { styles } from "../styles";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";

export function ServicesSection() {
  return (
    <section
      id="sluzby"
      style={{
        ...styles.section,
        background: "rgba(255,255,255,0.68)",
      }}
    >
      <SectionTitle
        eyebrow="Co nabízíme"
        title="Radost na každé dětské akci"
        text="Malování může být samostatný program, doplněk k oslavě nebo milá atrakce pro veřejnou akci."
      />

      <div style={styles.grid3}>
        {services.map((service) => (
          <Card key={service.title}>
            <div style={styles.cardIcon}>{service.icon}</div>
            <h3 style={styles.h3}>{service.title}</h3>
            <p style={styles.cardText}>{service.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
