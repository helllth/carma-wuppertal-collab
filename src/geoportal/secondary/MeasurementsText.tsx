import stepOne from "./assets/m-step-1.png";
import stepTwo from "./assets/m-step-2.png";
import stepThree from "./assets/m-step-3.png";
import stepFour from "./assets/m-step-4.png";
import { Link } from "../../helper-overlay/components/Link";
import { OverlayTourProvider } from "../../helper-overlay/components/OverlayTourProvider";

interface MeasurementsTextProps {
  showSecondaryWithKey?: (key: string) => void;
}

export const MeasurementsText = ({
  showSecondaryWithKey = () => {},
}: MeasurementsTextProps) => {
  return (
    <OverlayTourProvider>
      <ul
        className="overlay-helper-ul-class"
        style={{ margin: "0", paddingLeft: "20px", maxWidth: "600px" }}
      >
        <div>
          Wechselschalter zum An-/Abschalten des Messungsmodus (2D) |
          Klicken/Tippen zum Zeichnen von Messgeometrien | Linienzüge beenden
          mit Doppelklick, Polygone schließen durch erneutes Anklicken des
          Startpunktes | Ergebnisanzeige und Verwalten mehrerer Messgeometrien
          in der Info-Box | Speicherung der Messgeometrien im Browser
        </div>
        <div>
          <div
            style={{
              marginTop: "10px",
              marginLeft: "-10px",
              display: "flex",
              gap: "10px",
            }}
          >
            <img src={stepOne} style={{ height: "120px" }} />
            <img src={stepTwo} style={{ height: "120px" }} />
            <Link target="INFOBOX">
              <img src={stepThree} style={{ height: "120px" }} />
            </Link>
            <img src={stepFour} style={{ height: "120px" }} />
          </div>
        </div>
      </ul>
    </OverlayTourProvider>
  );
};
