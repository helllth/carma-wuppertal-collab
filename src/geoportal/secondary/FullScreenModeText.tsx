import { Link } from "../../helper-overlay/components/Link";

export const FullScreenModeText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Wechselschalter zum An-/Abschalten des Vollbildmodus (<b>2D</b> und <b>3D</b>) |
        Ausblenden der Bedienungselemente des Browsers erzeugt maximalen Platz
        für das Geoportal | Vollbildmodus kombinierbar mit{" "}
        <Link target="MESSUNGEN">Modus Strecke/Fläche messen</Link> oder{" "} 
        <Link target="SACHDATENABFRAGE">Modus Sachdaten abfragen</Link> | 
        Beenden auch mit esc-Taste
      </div>
    </ul>
  );
};
