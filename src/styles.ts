import type { CSSProperties } from "react";
import { colors } from "./theme";

export const responsiveCss = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    main header nav {
      display: none !important;
    }
  }

  @media (max-width: 700px) {
    /* Sekce – jeden sloupec, menší padding */
    main section {
      grid-template-columns: 1fr !important;
      padding-top: 44px !important;
      padding-bottom: 44px !important;
    }

    /* O mně – fotka pod textem na mobilu */
    .about-inner {
      flex-direction: column !important;
      align-items: center !important;
      gap: 28px !important;
    }

    /* Méně paddingu v kartě na mobilu */
    .about-card {
      padding: 28px 20px !important;
    }

    /* Menší kruhová fotka na mobilu */
    .about-photo-outer {
      width: 200px !important;
      height: 200px !important;
    }

    /* HowItWorks – 1 sloupec */
    .two-col {
      grid-template-columns: 1fr !important;
      gap: 24px !important;
    }

    /* Kontakt box – 1 sloupec, menší padding */
    .contact-box {
      grid-template-columns: 1fr !important;
      gap: 24px !important;
      padding: 28px 20px !important;
      border-radius: 28px !important;
    }

    /* Footer – vertikálně centrovaný */
    main footer {
      flex-direction: column !important;
      text-align: center !important;
      gap: 12px !important;
    }
  }
`;

export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: colors.cream,
    color: colors.purple,
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  blobPink: {
    position: "fixed",
    width: 320,
    height: 320,
    left: -90,
    top: 70,
    borderRadius: "50%",
    background: "rgba(244,109,154,0.16)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  blobTeal: {
    position: "fixed",
    width: 360,
    height: 360,
    right: -70,
    top: 190,
    borderRadius: "50%",
    background: "rgba(56,199,200,0.16)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  blobLavender: {
    position: "fixed",
    width: 320,
    height: 320,
    left: "35%",
    bottom: -120,
    borderRadius: "50%",
    background: "rgba(169,139,213,0.2)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },
  header: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "22px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  headerBrand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 30px rgba(53,35,90,0.08)",
  },
  headerTitle: {
    fontWeight: 950,
    fontSize: 18,
    lineHeight: 1.05,
  },
  headerSub: {
    fontWeight: 700,
    fontSize: 12,
    color: "#8B7BA8",
  },
  nav: {
    display: "flex",
    gap: 28,
    alignItems: "center",
    fontWeight: 850,
    color: colors.textMuted,
    fontSize: 14,
  },
  navLink: {
    fontWeight: 850,
    color: colors.textMuted,
  },
  button: {
    border: 0,
    borderRadius: 999,
    padding: "14px 24px",
    fontWeight: 950,
    fontSize: 15,
    transition: "transform .2s ease, box-shadow .2s ease",
  },
  buttonPrimary: {
    background: colors.pink,
    color: "white",
    boxShadow: "0 18px 35px rgba(244,109,154,0.25)",
  },
  buttonOutline: {
    background: "white",
    color: colors.purple,
    border: "2px solid rgba(53,35,90,0.12)",
    boxShadow: "0 10px 25px rgba(53,35,90,0.06)",
  },
  hero: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "40px 22px 90px",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    alignItems: "center",
    gap: 50,
  },
  heroCopy: {
    minWidth: 0,
  },
  location: {
    display: "inline-flex",
    background: "white",
    borderRadius: 999,
    padding: "10px 16px",
    fontWeight: 900,
    color: colors.purple,
    boxShadow: "0 10px 28px rgba(53,35,90,0.08)",
    marginBottom: 22,
  },
  h1: {
    margin: 0,
    fontSize: "clamp(42px, 7vw, 76px)",
    lineHeight: 1.02,
    letterSpacing: "-0.055em",
    fontWeight: 1000,
    maxWidth: 760,
  },
  heroText: {
    marginTop: 24,
    maxWidth: 660,
    fontSize: 20,
    lineHeight: 1.75,
    color: colors.textMuted,
  },
  buttonRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 30,
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 28,
  },
  pill: {
    background: "white",
    padding: "10px 15px",
    borderRadius: 999,
    fontWeight: 850,
    color: colors.textMuted,
    boxShadow: "0 8px 22px rgba(53,35,90,0.06)",
  },
  heroLogoCard: {
    background: "white",
    borderRadius: 48,
    padding: "28px 20px",
    boxShadow: "0 35px 100px rgba(53,35,90,0.16)",
    border: "1px solid rgba(53,35,90,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: "100%",
    maxWidth: 340,
    height: "auto",
    display: "block",
  },
  section: {
    position: "relative",
    zIndex: 1,
    padding: "84px 22px",
    maxWidth: "100%",
  },
  sectionTitle: {
    maxWidth: 760,
    margin: "0 auto 42px",
    textAlign: "center",
  },
  eyebrow: {
    display: "inline-flex",
    background: "white",
    borderRadius: 999,
    padding: "9px 15px",
    fontWeight: 950,
    color: colors.pink,
    boxShadow: "0 8px 22px rgba(244,109,154,0.08)",
    marginBottom: 14,
  },
  h2: {
    margin: 0,
    fontSize: "clamp(32px, 5vw, 52px)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    fontWeight: 1000,
  },
  h2Left: {
    margin: "16px 0 0",
    fontSize: "clamp(28px, 4vw, 44px)",
    lineHeight: 1.08,
    letterSpacing: "-0.04em",
    fontWeight: 1000,
  },
  sectionText: {
    margin: "16px auto 0",
    fontSize: 18,
    lineHeight: 1.75,
    color: colors.textMuted,
    maxWidth: 720,
  },
  sectionTextLeft: {
    marginTop: 18,
    fontSize: 18,
    lineHeight: 1.75,
    color: colors.textMuted,
  },
  grid3: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 20,
  },
  card: {
    padding: 28,
    borderRadius: 32,
    background: "white",
    boxShadow: "0 20px 60px rgba(53,35,90,0.08)",
    border: "1px solid rgba(53,35,90,0.06)",
  },
  cardFeatured: {
    outline: "5px solid rgba(244,109,154,0.16)",
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: colors.softPink,
    fontSize: 28,
    marginBottom: 18,
  },
  h3: {
    margin: 0,
    fontSize: 24,
    fontWeight: 1000,
    letterSpacing: "-0.025em",
  },
  cardText: {
    margin: "12px 0 0",
    color: colors.textMuted,
    lineHeight: 1.7,
    fontSize: 16,
  },
  faceBox: {
    height: 100,
    borderRadius: 24,
    background: `linear-gradient(135deg, ${colors.softPink}, white, ${colors.softTeal})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  miniFace: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "white",
    border: `5px solid ${colors.purple}`,
    position: "relative",
  },
  cheek: {
    position: "absolute",
    top: 24,
    width: 16,
    height: 16,
    borderRadius: "50%",
  },
  smallStar: {
    position: "absolute",
    right: -12,
    top: -14,
    color: colors.yellow,
    fontSize: 22,
  },
  badge: {
    display: "inline-flex",
    background: colors.pink,
    color: "white",
    borderRadius: 999,
    padding: "8px 13px",
    fontSize: 12,
    fontWeight: 1000,
    textTransform: "uppercase",
    letterSpacing: ".05em",
    marginBottom: 16,
  },
  price: {
    color: colors.pink,
    fontWeight: 1000,
    fontSize: 38,
    marginTop: 14,
    letterSpacing: "-0.04em",
  },
  note: {
    maxWidth: 780,
    textAlign: "center",
    color: colors.textMuted,
    lineHeight: 1.7,
    margin: "28px auto 0",
  },
  twoCol: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: ".9fr 1.1fr",
    gap: 28,
    alignItems: "stretch",
  },
  infoPanel: {
    background: "white",
    borderRadius: 42,
    padding: 34,
    boxShadow: "0 25px 80px rgba(53,35,90,0.10)",
  },
  bigEmoji: {
    width: 66,
    height: 66,
    borderRadius: 24,
    background: colors.softTeal,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    marginBottom: 22,
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  stepCard: {
    background: "white",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 12px 35px rgba(53,35,90,0.06)",
    border: "1px solid rgba(53,35,90,0.06)",
  },
  stepNum: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: colors.yellow,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 1000,
    fontSize: 18,
    marginBottom: 14,
  },
  stepTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 1000,
  },
  contactSection: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1180,
    margin: "0 auto",
    padding: "20px 22px 84px",
  },
  contactBox: {
    background: colors.purple,
    color: "white",
    borderRadius: 48,
    padding: "44px",
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 32,
    alignItems: "center",
    boxShadow: "0 35px 100px rgba(53,35,90,0.25)",
    overflow: "hidden",
  },
  contactBadge: {
    display: "inline-flex",
    background: "rgba(255,255,255,0.12)",
    borderRadius: 999,
    padding: "10px 16px",
    fontWeight: 900,
    marginBottom: 18,
  },
  contactTitle: {
    margin: 0,
    fontSize: "clamp(34px, 5vw, 58px)",
    lineHeight: 1.05,
    letterSpacing: "-0.045em",
    fontWeight: 1000,
  },
  contactText: {
    fontSize: 18,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 650,
  },
  contactCard: {
    background: "white",
    color: colors.purple,
    borderRadius: 32,
    padding: 24,
    display: "grid",
    gap: 14,
  },
  contactLink: {
    borderRadius: 20,
    padding: 16,
    fontWeight: 900,
    display: "block",
  },
  footer: {
    position: "relative",
    zIndex: 1,
    borderTop: "1px solid rgba(53,35,90,0.1)",
    background: "rgba(255,255,255,0.65)",
    padding: "28px 22px",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    flexWrap: "wrap",
    color: "#8B7BA8",
    fontWeight: 750,
  },
  footerLinks: {
    display: "flex",
    gap: 22,
  },

  // --- Story section ---
  storyWrap: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: ".8fr 1.2fr",
    gap: 48,
    alignItems: "center",
  },
  storyLogoFrame: {
    borderRadius: 44,
    background: `linear-gradient(145deg, ${colors.softPink} 0%, white 55%, ${colors.softTeal} 100%)`,
    padding: 32,
    boxShadow: "0 30px 80px rgba(53,35,90,0.13)",
    border: "1px solid rgba(53,35,90,0.07)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  storyLogo: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: 22,
  },
  storyTextCard: {
    background: "white",
    borderRadius: 44,
    padding: "44px 40px",
    boxShadow: "0 25px 80px rgba(53,35,90,0.09)",
    border: "1px solid rgba(53,35,90,0.06)",
  },
  storyEyebrow: {
    display: "inline-flex",
    background: colors.softPink,
    borderRadius: 999,
    padding: "9px 15px",
    fontWeight: 950,
    color: colors.pink,
    marginBottom: 0,
    fontSize: 15,
  },
  storyMainText: {
    fontSize: 21,
    lineHeight: 1.65,
    fontWeight: 700,
    color: colors.purple,
    margin: "20px 0 0",
  },
  storyBodyText: {
    margin: "14px 0 0",
    color: colors.textMuted,
    lineHeight: 1.75,
    fontSize: 17,
  },
  storyLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginTop: 24,
    color: colors.pink,
    fontWeight: 900,
    fontSize: 16,
    textDecoration: "none",
    borderBottom: `2px solid rgba(244,109,154,0.25)`,
    paddingBottom: 2,
  },

  // --- About (O mně) section ---
  aboutSection: {
    position: "relative",
    zIndex: 1,
    padding: "84px 22px",
    maxWidth: "100%",
    background: "rgba(255,255,255,0.72)",
  },
  aboutWrap: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 100,
    alignItems: "center",
  },
  aboutPhotoOuter: {
    width: 300,
    height: 300,
    borderRadius: "50%",
    padding: 5,
    background: `linear-gradient(145deg, ${colors.pink} 0%, ${colors.lavender} 50%, ${colors.teal} 100%)`,
    boxShadow: "0 24px 70px rgba(244,109,154,0.20)",
    flexShrink: 0,
  },
  aboutPhotoInner: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden",
    background: "white",
    padding: 3,
  },
  aboutPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 50%",
    borderRadius: "50%",
    display: "block",
  },
  aboutTextWrap: {
    minWidth: 0,
  },
  aboutTagline: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: colors.softPink,
    borderRadius: 999,
    padding: "9px 15px",
    fontWeight: 950,
    color: colors.pink,
    fontSize: 15,
    marginBottom: 0,
  },
  aboutLocation: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: colors.softTeal,
    borderRadius: 999,
    padding: "7px 14px",
    fontWeight: 850,
    color: colors.teal,
    fontSize: 14,
  },
  aboutMainText: {
    fontSize: 20,
    lineHeight: 1.65,
    fontWeight: 700,
    color: colors.purple,
    margin: "22px 0 0",
    maxWidth: 680,
  },
  aboutBodyText: {
    margin: "14px 0 0",
    color: colors.textMuted,
    lineHeight: 1.8,
    fontSize: 17,
    maxWidth: 660,
  },
};
