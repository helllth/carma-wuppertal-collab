import { featureSamples4Icons } from "./helper/iconFactory";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";

export const SimpleHelpKlimaorte = () => {
  return (
    <div>
      <p>
        Die Möglichkeiten zum Klima- und Umweltschutz werden aktuell global
        diskutiert, wobei bereits auf kommunaler Ebene viele Akteure und
        Einrichtungen an deren Umsetzung beteiligt sind. An den im Kartenbild
        gezeigten "Klimaorten" wird das Thema Klimaschutz praktiziert und
        vermittelt; hier wird der Klimaschutz für die Bürger:innen erlebbar.
        Viele dieser Klimaorte sind im Rahmen von innovativen Projekten durch
        den Wissenstransfer und das Engagement von Unternehmen, Vereinen,
        Verbänden sowie Quartiersbewohner:innen entstanden, die sich aktiv für
        Lösungen zum Klima- und Umweltschutz in ihrem Quartier und für die Stadt
        Wuppertal einsetzen. Zu den zielführenden Projekten gehören z.B.
        Wuppertals Klimasiedlungen, Anlagen zur effizienten und/oder
        regenerativen Energieerzeugung, Projekte der Verkehrswende sowie der
        Klima- und Umweltbildung, an denen zahlreiche Akteure mitwirken und
        mitgestalten.
      </p>
      <p>
        Mit den Klimarouten steht den Bürger:innen eine weitere Möglichkeit zur
        Erkundung der Klimaorte im Wuppertaler Stadtgebiet zur Verfügung.
        Verschiedene Routen (zu Fuß oder mit dem Fahrrad) führen Sie an
        ausgewählten Klimaorten vorbei: Aussichtspunkte{" "}
        {getSymbolSVGGetter(
          featureSamples4Icons.aussichtspunkt?.properties?.svgBadge,
          featureSamples4Icons.aussichtspunkt?.properties?.svgBadgeDimension
        )(
          20,
          featureSamples4Icons.aussichtspunkt?.properties.color,
          "aussichtspunktsample_"
        )}{" "}
        ermöglichen Ihnen den Blick auf weitere Klimaorte aus größerer
        Entfernung zu werfen und Zwischenstopps{" "}
        {getSymbolSVGGetter(
          featureSamples4Icons.zwischenstopp?.properties?.svgBadge,
          featureSamples4Icons.zwischenstopp?.properties?.svgBadgeDimension
        )(
          20,
          featureSamples4Icons.zwischenstopp?.properties.color,
          "zwischenstoppsample_"
        )}{" "}
        bieten Ihnen ausgewählte Highlights im Routenverlauf an.
      </p>
      <p>
        Ergänzt wird dieses Angebot durch weitere interessante Orte (Point of
        Interest, POI) entlang des Routenverlaufs. Begeben Sie sich auf
        Erkundungstour: die Welt des Klimaschutzes und nachhaltiger Ideen
        erwarten Sie.
      </p>
    </div>
  );
};
