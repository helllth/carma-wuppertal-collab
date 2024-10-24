import { Link } from "../../helper-overlay/components/Link";

export const InfoboxText = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
    >
      <div>
        Nur sichtbar in Modi mit Anzeige von Objektinformationen (<b>2D</b>) |{" "} 
        <Link target="MESSUNGEN">Modus Strecke/Fläche messen</Link>: 
        Navigation in zuvor angelegten Messgeometrien, Anzeige der Messergebnisse, Löschen von Messgeometrien 
        |{" "}<Link target="SACHDATENABFRAGE">Modus Sachdaten abfragen</Link>: 
        Anzeige der wichtigsten Informationen/Links zum selektierten Objekt und/oder zu Objekten an ausgewählter Position 
        mit Link zu vollständigen Sachinformationen; Informationen zu mehreren Objekten in überlappenden Info-Boxen, 
        Info-Box in den Vordergrund holen durch Klicken/Tippen auf den Titelbalken
      </div>
    </ul>
  );
};
