import martinaImg from "../assets/martina.png";
import { styles } from "../styles";

export function AboutSection() {
  return (
    <section
      id="o-mne"
      style={{
        ...styles.section,
        background:
          "linear-gradient(160deg, rgba(255,241,246,0.55) 0%, rgba(238,252,252,0.45) 100%)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="about-card" style={styles.storyTextCard}>
          <div
            className="about-inner"
            style={{ display: "flex", gap: 48, alignItems: "center" }}
          >
            {/* Text – první v DOM = nahoře na mobilu */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <span style={styles.storyEyebrow}>✨ O mně</span>
                <span style={styles.aboutLocation}>📍 Praha 8</span>
              </div>

              <h2 style={styles.h2Left}>Jsem Martina Škorubová</h2>

              <p style={styles.storyMainText}>
                Jsem máma dvou holčiček, díky kterým jsem začala malovat dětem
                na obličeje — a zrodila se láska, která trvá dodnes.
              </p>

              <p style={styles.storyBodyText}>
                Na každé oslavě nebo akci přináším kousek kouzel v podobě barev,
                třpytek a radostných proměn. Věřím, že malé detaily dělají velké
                vzpomínky — a proto ke každému dítěti přistupuji s trpělivostí,
                laskavostí a úsměvem.
              </p>
            </div>

            {/* Fotka – vpravo na desktopu, dole na mobilu */}
            <div style={{ flexShrink: 0 }}>
              <div className="about-photo-outer" style={styles.aboutPhotoOuter}>
                <div style={styles.aboutPhotoInner}>
                  <img
                    src={martinaImg}
                    alt="Martina Škorubová"
                    style={styles.aboutPhoto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
