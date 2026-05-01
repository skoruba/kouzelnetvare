import { styles } from "../styles";
import { Button } from "./Button";
import { LogoMark } from "./LogoMark";

export function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroCopy}>
        <div style={styles.location}>📍 Praha a okolí</div>

        <h1 style={styles.h1}>Kouzelné malování na obličej pro dětské akce</h1>

        <p style={styles.heroText}>
          Proměníme děti v motýlky, tygříky, princezny i superhrdiny. Jemné
          barvy, třpytky, úsměvy a krásná atmosféra na oslavách, ve školkách i
          na firemních family days.
        </p>

        <div style={styles.buttonRow}>
          <Button href="#kontakt">Chci termín 🎨</Button>
          <Button variant="outline" href="#cenik">
            Zobrazit ceník
          </Button>
        </div>

        <div style={styles.pills}>
          <span style={styles.pill}>✨ zdravotně nezávadné barvy</span>
          <span style={styles.pill}>🦋 rychlé motivy</span>
          <span style={styles.pill}>💗 milý přístup k dětem</span>
        </div>
      </div>

      <div className="hero-logo" style={styles.heroLogoCard}>
        <LogoMark />
      </div>
    </section>
  );
}
