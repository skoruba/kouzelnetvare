import { styles } from "../styles";
import { BrushIcon } from "./BrushIcon";
import { Button } from "./Button";

export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerBrand}>
        <div style={styles.headerIcon}>
          <BrushIcon size={26} />
        </div>
        <div>
          <div style={styles.headerTitle}>Kouzelné Tváře</div>
          <div style={styles.headerSub}>malování na obličej</div>
        </div>
      </div>

      <nav style={styles.nav}>
        <a style={styles.navLink} href="#sluzby">
          Služby
        </a>
        <a style={styles.navLink} href="#motivy">
          Motivy
        </a>
        <a style={styles.navLink} href="#cenik">
          Ceník
        </a>
        <a style={styles.navLink} href="#o-mne">
          O mně
        </a>
        <a style={styles.navLink} href="#kontakt">
          Kontakt
        </a>
      </nav>

      <Button>Rezervovat</Button>
    </header>
  );
}
