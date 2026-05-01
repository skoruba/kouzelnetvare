import { motifs, colors } from "../theme";
import { styles } from "../styles";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";

export function MotifsSection() {
  return (
    <section id="motivy" style={styles.section}>
      <SectionTitle
        eyebrow="Oblíbené motivy"
        title="Od jemných srdíček po odvážné tygříky"
        text="Děti si mohou vybrat z jednoduché nabídky motivů, aby šlo malování svižně a bez stresu."
      />

      <div style={styles.grid3}>
        {motifs.map(([title, text], index) => (
          <Card key={title}>
            <div style={styles.faceBox}>
              <div style={styles.miniFace}>
                <span
                  style={{
                    ...styles.cheek,
                    left: -7,
                    background: colors.pink,
                  }}
                />
                <span
                  style={{
                    ...styles.cheek,
                    right: -7,
                    background: colors.teal,
                  }}
                />
                {index % 2 === 0 ? (
                  <span style={styles.smallStar}>★</span>
                ) : null}
              </div>
            </div>
            <h3 style={styles.h3}>{title}</h3>
            <p style={styles.cardText}>{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
