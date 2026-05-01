import { motifs } from "../theme";
import { styles } from "../styles";
import { SectionTitle } from "./SectionTitle";
import { Card } from "./Card";

import vesmir from "../assets/themes/1-vesmir.png";
import fotbal from "../assets/themes/2-fotbal.png";
import kocka from "../assets/themes/3-kocka.png";
import motyl from "../assets/themes/4-motyl.png";
import duha from "../assets/themes/5-duha.png";
import spiderman from "../assets/themes/6-spiderman.png";
import jednorozec from "../assets/themes/7-jednorozec.png";
import minecraft from "../assets/themes/8-mineraft.png";

const themeImages = [vesmir, fotbal, kocka, motyl, duha, spiderman, jednorozec, minecraft];

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
            <img
              src={themeImages[index]}
              alt={title}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 24,
                marginBottom: 18,
                display: "block",
                boxShadow: "0 12px 28px rgba(53,35,90,0.08)",
              }}
            />
            <h3 style={styles.h3}>{title}</h3>
            <p style={styles.cardText}>{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
