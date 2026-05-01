import martinaImg from "../assets/martina.png";
import { styles } from "../styles";

export function AboutSection() {
  return (
    <section id="o-mne" style={styles.aboutSection}>
      <div style={styles.aboutWrap}>
        {/* Kruhová fotka s gradientním rámem */}
        <div style={styles.aboutPhotoOuter}>
          <div style={styles.aboutPhotoInner}>
            <img
              src={martinaImg}
              alt="Martina Škorubová"
              style={styles.aboutPhoto}
            />
          </div>
        </div>

        {/* Text */}
        <div style={styles.aboutTextWrap}>
          <div>
            <span style={styles.aboutTagline}>✨ O mně</span>
            <span style={styles.aboutLocation}>📍 Praha 8</span>
          </div>

          <h2 style={styles.h2Left}>Jsem Martina Škorubová</h2>

          <p style={styles.aboutMainText}>
            Díky mým dvěma holčičkám jsem začala malovat dětem na obličeje — a
            zrodila se láska, která trvá dodnes.
          </p>

          <p style={styles.aboutBodyText}>
            Na každé oslavě nebo akci přináším kousek kouzel v podobě barev,
            třpytek a radostných proměn. Věřím, že malé detaily dělají velké
            vzpomínky — a proto ke každému dítěti přistupuji s trpělivostí,
            laskavostí a úsměvem.
          </p>
        </div>
      </div>
    </section>
  );
}
