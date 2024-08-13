import Icon from "react-cismap/commons/Icon";
interface InKartePositionierenTextProps {
  marker: React.ReactNode;
  pretext: React.ReactNode;
  zoomstufe?: number;
  punktgeometrie?: string;
  flachengeometrie?: string;
  posttext?: React.ReactNode;
}
const InKartePositionierenText = ({
  pretext,
  marker,
  zoomstufe = 14,
  punktgeometrie = "(Adresse, Straße, POI)",
  flachengeometrie = "(Stadtbezirk, Quartier)",
  posttext,
}: InKartePositionierenTextProps) => {
  return (
    <>
      {pretext}
      <p>
        Nach der Auswahl eines Treffers aus der Liste wird die Karte auf die
        zugehörige Position zentriert. Bei Suchbegriffen mit Punktgeometrie{" "}
        {punktgeometrie} wird außerdem ein großer Maßstab (Zoomstufe {zoomstufe}
        ) eingestellt und ein Marker {marker} auf der Zielposition platziert.
        Bei Suchbegriffen mit Flächengeometrie {flachengeometrie} wird der
        Maßstab so eingestellt, dass die Fläche vollständig dargestellt werden
        kann. Zusätzlich wird der Bereich außerhalb dieser Fläche abgedunkelt
        (Spotlight-Effekt).
      </p>
      <p>
        Durch Anklicken des Werkzeugs <Icon name="times" /> links neben dem
        Eingabefeld können Sie die Suche zurücksetzen (Entfernung von Marker
        bzw. Abdunklung, Löschen des Textes im Eingabefeld).
      </p>
      {posttext && posttext}
    </>
  );
};

export default InKartePositionierenText;
