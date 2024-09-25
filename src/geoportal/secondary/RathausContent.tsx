import stepOne from "./assets/rathaus-video-4.mp4";
import stepTwo from "./assets/m-step-2.png";
import stepThree from "./assets/m-step-3.png";
import stepFour from "./assets/m-step-4.png";

export const RathausContent = () => {
  return (
    <ul
      className="overlay-helper-ul-class"
      style={{ margin: "0", paddingLeft: "20px", maxWidth: "640px" }}
    >
      <li>
        Die Schaltfläche aktiviert einen Modus zum Messen von Strecken und/oder
        Flächen, nicht nur eine einmalige Messung.
      </li>
      <li>
        Linienzüge schließt man durch erneutes Anklicken des letzten Punktes
        („Doppelklick auf Endpunkt“), Flächen durch erneutes Anklicken des
        Startpunktes.
      </li>
      <li>
        Man kann mehrere Messgeometrien anlegen, deren Verwaltung über die
        Info-Box erfolgt.
      </li>
      <li>
        Die Messgeometrien werden im Browser-Cache gespeichert und stehen
        dadurch nach einem erneuten Starten des Geoportals weiterhin zur
        Verfügung.
      </li>
      <div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "-10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <video height="120px" controls>
            <source src={stepOne} type="video/mp4" />
          </video>
          <img src={stepTwo} style={{ height: "120px" }} />
          <img src={stepThree} style={{ height: "120px" }} />
          <img src={stepFour} style={{ height: "120px" }} />
        </div>
      </div>
    </ul>
  );
};
