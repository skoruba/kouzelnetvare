import { steps } from "../theme";
import { styles } from "../styles";

export function HowItWorksSection() {
  return (
    <section style={styles.section}>
      <div className="two-col" style={styles.twoCol}>
        <div style={styles.infoPanel}>
          <div style={styles.bigEmoji}>📸</div>
          <h2 style={styles.h2Left}>Jak to probíhá?</h2>
          <p style={styles.sectionTextLeft}>
            Domluvíme termín, místo a přibližný počet dětí. Na akci stačí malý
            stolek, dvě židle a dobré světlo. Děti si vyberou motiv a odchází s
            úsměvem.
          </p>
        </div>

        <div style={styles.stepsGrid}>
          {steps.map(([num, title, text]) => (
            <div key={num} style={styles.stepCard}>
              <div style={styles.stepNum}>{num}</div>
              <h3 style={styles.stepTitle}>{title}</h3>
              <p style={styles.cardText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
