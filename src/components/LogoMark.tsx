import logoImg from "../assets/logo.png";
import { styles } from "../styles";

export function LogoMark() {
  return (
    <img src={logoImg} alt="Kouzelné Tváře logo" style={styles.logoImage} />
  );
}
