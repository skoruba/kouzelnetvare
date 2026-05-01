import { styles } from "../styles";
import logoSmall from "../assets/logo-small.png";
import { Button } from "./Button";

export function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerBrand}>
        <div style={styles.headerIcon}>
          <img
            src={logoSmall}
            alt="Kouzelné Tváře"
            style={{ width: 28, height: 28 }}
          />
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

      <Button href="#kontakt">Rezervovat</Button>
    </header>
  );
}
