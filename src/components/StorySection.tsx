import logoImg from "../assets/logo.png";
import { styles } from "../styles";

export function StorySection() {
  return (
    <section
      style={{
        ...styles.section,
        background:
          "linear-gradient(160deg, rgba(255,241,246,0.55) 0%, rgba(238,252,252,0.45) 100%)",
      }}
    >
      <div style={styles.storyWrap}>
        <div style={styles.storyLogoFrame}>
          <img
            src={logoImg}
            alt="Logo Kouzelné Tváře"
            style={styles.storyLogo}
          />
        </div>

        <div style={styles.storyTextCard}>
          <div style={styles.storyEyebrow}>💗 Příběh značky</div>
          <h2 style={styles.h2Left}>Kdo stojí za Kouzelnými Tvářemi?</h2>

          <p style={styles.storyMainText}>
            Jsem Martina, máma dvou holčiček, díky kterým maluji dětem kouzelné
            tváře pro radost.
          </p>

          <p style={styles.storyBodyText}>
            Na oslavách a akcích vytvářím dětem milé proměny plné barev, třpytek
            a úsměvů — s jemným přístupem, radostí a láskou k detailu.
          </p>

          <a href="#o-mne" style={styles.storyLink}>
            Více o mně →
          </a>
        </div>
      </div>
    </section>
  );
}
