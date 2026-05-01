import { colors } from "../theme";
import { styles } from "../styles";
import { Button } from "./Button";

export function ContactSection() {
  return (
    <section id="kontakt" style={styles.contactSection}>
      <div style={styles.contactBox}>
        <div>
          <div style={styles.contactBadge}>✨ Volné termíny po domluvě</div>
          <h2 style={styles.contactTitle}>Chcete dětem vykouzlit úsměv?</h2>
          <p style={styles.contactText}>
            Napište termín, místo akce a přibližný počet dětí. Ozveme se s
            návrhem balíčku a cenou.
          </p>
        </div>

        <div style={styles.contactCard}>
          <a
            href="mailto:skorubova@email.cz"
            style={{
              ...styles.contactLink,
              background: colors.softPink,
            }}
          >
            ✉️ skorubova@email.cz
          </a>

          <a
            href="tel:+420777559022"
            style={{
              ...styles.contactLink,
              background: colors.softTeal,
            }}
          >
            📞 +420 777 559 022
          </a>

          <Button>Poslat poptávku</Button>
        </div>
      </div>
    </section>
  );
}
