import { styles } from "../styles";

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div>© 2026 Kouzelné Tváře · Malování na obličej Praha a okolí</div>

      <div style={styles.footerLinks}>
        <a
          href="https://www.instagram.com/kouzelnetvare/"
          style={styles.navLink}
        >
          Instagram
        </a>
        <a href="#kontakt" style={styles.navLink}>
          Kontakt
        </a>
      </div>
    </footer>
  );
}
