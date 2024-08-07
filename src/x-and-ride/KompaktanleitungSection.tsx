import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import meinStandpunktMarkerDoppel from "./assets/MeinStandpunktMarkerDoppel.jpg";
import meinStandpunktMarkerMitKompass from "./assets/MeinStandpunktMarkerMitKompass.jpg";
import {
  faPlus,
  faInfoCircle,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import { getSymbolSVG, prSVG, brSVG } from "./helper/styler";
import { Link } from "react-scroll";
import prbrCluster from "./assets/prbr_cluster.png";

interface KompaktanleitungSectionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const KompaktanleitungSection: React.FC<
  KompaktanleitungSectionProps
> = ({ setAppMenuActiveMenuSection }) => {
  const inlinePRVSVG = getSymbolSVG(24, "#FFFFFF", "prSVG", prSVG);
  const inlineBRVSVG = getSymbolSVG(24, "#FFFFFF", "brSVG", brSVG);
  return (
    <Section
      key="help"
      sectionKey="help"
      sectionBsStyle="default"
      sectionTitle="Kompaktanleitung"
      sectionContent={
        <ConfigurableDocBlocks
          configs={[
            {
              type: "FAQS",
              configs: [
                {
                  title: "Datengrundlage",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die <strong> Park+Ride-Karte Wuppertal</strong> bietet
                          ihnen die folgenden Hintergrundkarten an, die auf
                          verschiedenen Geodatendiensten und Geodaten basieren:
                        </p>
                        <ul>
                          <li>
                            <strong>Stadtplan (Tag | Nacht)</strong>:
                            Kartendienst (WMS) des Regionalverbandes Ruhr (RVR).
                            Datengrundlage: <strong>Stadtkarte 2.0</strong>.
                            Wöchentlich in einem automatischen Prozess
                            aktualisierte Zusammenführung des Straßennetzes der
                            OpenStreetMap mit Amtlichen Geobasisdaten des Landes
                            NRW aus den Fachverfahren ALKIS (Gebäude,
                            Flächennutzungen) und ATKIS (Gewässer). © RVR und
                            Kooperationspartner (
                            <a
                              target="_legal"
                              href="https://www.govdata.de/dl-de/by-2-0"
                            >
                              Datenlizenz Deutschland - Namensnennung - Version
                              2.0
                            </a>
                            ). Lizenzen der Ausgangsprodukte:{" "}
                            <a
                              target="_legal"
                              href="https://www.govdata.de/dl-de/zero-2-0"
                            >
                              Datenlizenz Deutschland - Zero - Version 2.0
                            </a>{" "}
                            (Amtliche Geobasisdaten) und{" "}
                            <a
                              target="_legal"
                              href="https://www.opendatacommons.org/licenses/odbl/1.0/"
                            >
                              ODbL
                            </a>{" "}
                            (OpenStreetMap contributors).
                          </li>
                          <li>
                            <strong>Luftbildkarte</strong>: (1) Kartendienst
                            (WMS) der Stadt Wuppertal. Datengrundlage:{" "}
                            <strong>
                              True Orthophoto aus Bildflug vom 16.03.2022
                            </strong>
                            , hergestellt durch Aerowest GmbH/Dortmund,
                            Bodenauflösung 10 cm. (True Orthophoto: Aus
                            Luftbildern mit hoher Längs- und Querüberdeckung in
                            einem automatisierten Bildverarbeitungsprozess
                            berechnetes Bild in Parallelprojektion, also ohne
                            Gebäudeverkippung und sichttote Bereiche.) © Stadt
                            Wuppertal (
                            <a
                              target="_legal"
                              href="https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf"
                            >
                              NB-GDIKOM C
                            </a>
                            ). (2) Kartendienste (WMS) des Regionalverbandes
                            Ruhr (RVR). Datengrundlagen:{" "}
                            <strong>Stadtkarte 2.0</strong> und{" "}
                            <strong>
                              Kartenschrift aus der Stadtkarte 2.0
                            </strong>
                            . (Details s. Hintergrundkarte Stadtplan).
                          </li>
                        </ul>

                        <p>
                          Zusätzlich nutzt die P+R-Karte die Datensätze{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/park-and-ride-anlagen-wuppertal"
                          >
                            Park and Ride Anlagen Wuppertal
                          </a>
                          ,{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/bike-and-ride-anlagen-wuppertal"
                          >
                            Bike and Ride Anlagen Wuppertal
                          </a>{" "}
                          und{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/umweltzonen-wuppertal"
                          >
                            Umweltzonen Wuppertal
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Anlagen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Zur Darstellung der Anlagen in der Karte verwenden wir
                          zwei unterschiedliche Symbole für die P+R-{" "}
                          {inlinePRVSVG} und die B+R-Anlagen {inlineBRVSVG}. Die
                          Farben der Symbole werden in der Titelzeile der
                          Info-Box unten rechts aufgegriffen. Zusätzlich wird
                          dort der Typ der Anlage (Park + Ride bzw. Bike + Ride)
                          wiederholt. Räumlich nah beieinander liegende Anlagen
                          werden standardmäßig maßstabsabhängig zu größeren
                          Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl
                          der repräsentierten Anlagen im Zentrum{" "}
                          <img alt="Cluster" width="32" src={prbrCluster} />.
                          Vergrößern Sie ein paar Mal durch direktes Anklicken
                          eines solchen Punktes oder mit{" "}
                          <FontAwesomeIcon icon={faPlus} /> die Darstellung, so
                          werden die zusammengefassten Anlagen Schritt für
                          Schritt in die kleineren Symbole für die
                          Einzel-Anlagen zerlegt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Anlagen auswählen und abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der Symbole für Park+Ride- bzw. Bike+Ride-Anlagen
                          (P+R- bzw. B+R-Anlagen), um sich den Namen der Anlage
                          anzeigen zu lassen. Ein Klick auf das Symbol setzt den
                          Fokus auf diese Anlage. Sie wird dann blau hinterlegt
                          und die zugehörigen Informationen (Name,
                          Lagebeschreibung, Anzahl der Plätze) werden in der
                          Info-Box angezeigt. (Auf einem Tablet-PC wird der
                          Fokus durch das erste Antippen des Symbols gesetzt,
                          das zweite Antippen blendet den Namen ein.) Durch
                          Anklicken des Symbols{" "}
                          <FontAwesomeIcon icon={faInfoCircle} /> rechts neben
                          dem Namen der Anlage öffnen Sie das Datenblatt mit den
                          vollständigen Informationen zu dieser Anlage
                          einschließlich einer Verknüpfung zur Fahrplanauskunft
                          des VRR für die zugehörige Haltestelle. Mit dem
                          Lupensymbol{" "}
                          <FontAwesomeIcon icon={faSearchLocation} /> wird die
                          Karte auf die Anlage, die gerade den Fokus hat,
                          zentriert und gleichzeitig ein großer
                          Betrachtungsmaßstab (Zoomstufe 14) eingestellt.{" "}
                        </p>
                        <p>
                          Wenn Sie noch keine Anlage im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf die nördlichste Anlage gesetzt. Mit
                          den Funktionen <a>&lt;&lt;</a> vorheriger Treffer und{" "}
                          <a>&gt;&gt;</a> nächster Treffer können Sie ausgehend
                          von der Anlage, auf der gerade der Fokus liegt, in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten Anlagen durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch der Typ der Anlage (Park
                          + Ride oder Bike + Ride), ihr Name und die Symbole{" "}
                          <FontAwesomeIcon icon={faSearchLocation} /> und{" "}
                          <FontAwesomeIcon icon={faInfoCircle} /> angezeigt
                          werden - nützlich für Endgeräte mit kleinem Display.
                          Mit der Schaltfläche <Icon name="chevron-circle-up" />{" "}
                          an derselben Stelle können Sie die Info-Box wieder
                          vollständig einblenden.
                        </p>
                        <p>
                          Ein kleines Foto über der Info-Box vermittelt Ihnen
                          einen Eindruck vom Aussehen der Anlage vor Ort.
                          Klicken Sie auf dieses Vorschaubild, um einen
                          Bildbetrachter ("Leuchtkasten") mit dem Foto zu
                          öffnen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Um direkt zu einer P+R- oder B+R-Anlage zu gelangen,
                          geben Sie den Anfang des Namens der Anlage im
                          Eingabefeld links unten ein (mindestens 2 Zeichen). In
                          der inkrementellen Auswahlliste werden Ihnen passende
                          Treffer angeboten. (Wenn Sie weitere Zeichen eingeben,
                          wird der Inhalt der Auswahlliste angepasst.) Sie
                          können auch andere Suchbegriffe eingeben, nämlich
                          Stadtteil (Stadtbezirk oder Quartier), Adresse,
                          Straßenname oder POI. Durch das in der Auswahlliste
                          vorangestellte Symbol erkennen Sie, ob es sich bei
                          einem Treffer um eine <Icon name="car" /> P+R-Anlage,
                          eine <Icon name="bicycle" /> B+R-Anlage, einen{" "}
                          <Icon name="circle" /> Stadtbezirk, ein{" "}
                          <Icon name="pie-chart" /> Quartier, eine{" "}
                          <Icon name="home" /> Adresse, eine{" "}
                          <Icon name="road" /> Straße ohne zugeordnete
                          Hausnummern, einen <Icon name="tag" /> POI, die{" "}
                          <Icon name="tags" /> alternative Bezeichnung eines
                          POI, eine <Icon name="child" /> Kindertageseinrichtung
                          oder eine <Icon name="graduation-cap" /> Schule
                          handelt. Tipp: Durch Eingabe von "P+" oder "B+"
                          erzeugen Sie eine vollständige Auswahlliste aller P+R-
                          bzw. B+R-Anlagen.
                        </p>
                        <p>
                          Nach der Auswahl eines Treffers aus der Liste wird die
                          Karte auf die zugehörige Position zentriert. Bei
                          Suchbegriffen mit Punktgeometrie (P+R- oder
                          B+R-Anlage, Adresse, Straße, POI) wird außerdem ein
                          großer Maßstab (Zoomstufe 14) eingestellt und ein
                          Marker <Icon name="map-marker" /> auf der Zielposition
                          platziert. Bei Suchbegriffen mit Flächengeometrie
                          (Stadtbezirk, Quartier) wird der Maßstab so
                          eingestellt, dass die Fläche vollständig dargestellt
                          werden kann. Zusätzlich wird der Bereich außerhalb
                          dieser Fläche abgedunkelt (Spotlight-Effekt).
                        </p>
                        <p>
                          Durch Anklicken des Werkzeugs <Icon name="times" />{" "}
                          links neben dem Eingabefeld können Sie die Suche
                          zurücksetzen (Entfernung von Marker bzw. Abdunklung,
                          Löschen des Textes im Eingabefeld).
                        </p>
                        <p>
                          Wenn Sie die Karte wie oben beschrieben auf eine P+R-
                          bzw. B+R-Anlage positionieren, erhält diese sofort den
                          Fokus, sodass die zugehörigen Informationen direkt in
                          der Info-Box angezeigt werden. Voraussetzung dafür
                          ist, dass die aktuellen{" "}
                          <Link
                            to="MeinThemenstadtplan"
                            containerId="myMenu"
                            onClick={() =>
                              setAppMenuActiveMenuSection("filter")
                            }
                            className="renderAsLink"
                          >
                            Filtereinstellungen
                          </Link>{" "}
                          die Darstellung der Anlage in der Karte erlauben.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Das Werkzeug &quot;Mein Standort&quot;{" "}
                          <FontAwesomeIcon icon={faLocationArrow} />{" "}
                          funktioniert so wie hier beschrieben nur auf mobilen
                          Endgeräten wie Smartphones und Tablet-PC&#39;s, die i.
                          d. R. mit einem GNSS-Empfänger als Positionssensor
                          ausgestattet sind (GNSS steht für Global Navigation
                          Satellite Systems, z.B.{" "}
                          <a
                            target="_info"
                            href="https://dvw.de/sites/default/files/landesverein-bayern/VeroeffentlichungenMitteilungen1996_4/DVW_1996_4_Schlie%C3%9Fer_GPS_Systemgrundlagen.pdf"
                          >
                            GPS
                          </a>
                          ). Mit dem ersten Antippen dieses Werkzeugs aktivieren
                          Sie den &quot;Follow me&quot;-Modus, erkennbar an der
                          orangefarbigen Darstellung des Werkzeug-Symbols. Ggf.
                          werden Sie vom Browser bzw. dem Betriebssystem Ihres
                          Endgerätes zur Freigabe der Lokalisierung
                          aufgefordert. Die Karte wird auf Ihren aktuellen
                          Standort zentriert, der mit einem blauen Kreissymbol{" "}
                          <img
                            alt="MeinStandpunktMarker"
                            src={meinStandpunktMarkerMitKompass}
                          />{" "}
                          markiert wird. Das kleine blaue Dreieck am Rand dieses
                          Standortsymbols zeigt Ihre aktuelle Blickrichtung an
                          (genauer: die Richtung, in die Ihr Endgerät zeigt).
                          Das Standortsymbol ist umgeben von einem zweiten Kreis
                          mit transparenter, blauer Füllung, dessen Radius die
                          Unsicherheit der Positionsbestimmung angibt{" "}
                          <img
                            alt="MeinStandpunktMarkerDoppel"
                            src={meinStandpunktMarkerDoppel}
                          />
                          . Durch Antippen des inneren Kreises können Sie einen
                          Texthinweis mit einer konkreten Angabe der aktuellen
                          Positionsgenauigkeit einblenden. Dieser Hinweis kann
                          durch das Antippen einer beliebigen Stelle außerhalb
                          seines Textfeldes geschlossen werden. Wenn Sie sich
                          mit Ihrem Endgerät bewegen (z. B. bei einer
                          Wanderung), wird Ihre aktuelle Position im
                          &quot;Follow me&quot;-Modus in schneller Folge neu
                          bestimmt und stets in der Mitte der Karte angezeigt.
                          Die Karte wird dazu automatisiert nachgeführt. Ein
                          weiteres Antippen von &quot;Mein Standort&quot;
                          schaltet die Anzeige Ihrer Position wieder ab
                          (schwarzes Werkzeug-Symbol).{" "}
                        </p>
                        <p>
                          Wenn Sie die Karte im aktivierten &quot;Follow
                          me&quot;-Modus manuell verschieben, wird der
                          &quot;Follow me&quot;-Modus unterbrochen, erkennbar an
                          einer blauen Darstellung des Werkzeug-Symbols. Ihr
                          aktueller Standort wird weiterhin angezeigt und in
                          schneller Folge aktualisiert. Der Kartenausschnitt
                          wird jetzt aber nicht mehr automatisch an den
                          aktuellen Standort angepasst. Bei fortgesetzter
                          Bewegung in eine Richtung wird das Standortsymbol
                          daher vom Zentrum zum Rand des Kartenfensters wandern
                          und dann verschwinden - Ihr Standort liegt jetzt nicht
                          mehr im aktuell eingestellten Kartenausschnitt! In
                          diesem Fall führt ein erneutes Antippen von &quot;Mein
                          Standort&quot; dazu, dass wieder in den &quot;Follow
                          me&quot;-Modus zurückgewechselt wird. Wenn Ihr
                          aktueller Standort dagegen noch in der Karte sichtbar
                          ist, wird durch diese Aktion die Anzeige der Position
                          abgeschaltet (schwarzes Werkzeug-Symbol). Sie können
                          die Unterbrechung des &quot;Follow me&quot;-Modus bei
                          einer Wanderung o. ä. nutzen, wenn Sie sich die vor
                          Ihnen liegende Strecke in der Karte anschauen wollen.
                          Verschieben Sie dazu den Kartenausschnitt manuell auf
                          den Abschnitt Ihres Interesses. Ihr aktueller Standort
                          wird dann zumeist nicht mehr dargestellt werden
                          können. Der &quot;Follow me&quot;-Modus wird
                          unterbrochen (blaues Werkzeug-Symbol). Wenn Sie sich
                          ausreichend über den weiteren Streckenverlauf
                          informiert haben, reaktivieren Sie durch erneutes
                          Antippen von &quot;Mein Standort&quot; den
                          &quot;Follow me&quot;-Modus und setzen die Karte damit
                          wieder auf Ihren aktuellen Standort zurück.{" "}
                        </p>
                        <p>
                          Noch ein Hinweis zur Genauigkeit: Die Richtigkeit der
                          Positionsanzeige ist nicht garantiert. Ihre
                          Genauigkeit hängt von verschiedenen Faktoren ab, u. a.
                          von der Qualität des GNSS-Empfängers in Ihrem
                          Endgerät, der Umgebungssituation (z. B. hohe Gebäude
                          oder spiegelnde Oberflächen in der Nachbarschaft)
                          sowie der Methode, mit der Ihr Endgerät und der von
                          Ihnen verwendete Browser die Position bestimmen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Filtern",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Im Bereich "<strong>Filter</strong>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> die in der Karte
                          angezeigten P+R- und B+R-Anlagen so ausdünnen, dass
                          nur die für Sie interessanten Anlagen übrig bleiben.
                          Standardmäßig sind die Einstellungen hier so gesetzt,
                          dass alle Anlagen angezeigt werden.
                        </p>
                        <p>
                          Mit den Optionen unter "
                          <b>
                            <i>Umweltzonen</i>
                          </b>
                          " können Sie die Kartenanzeige auf Anlagen innerhalb
                          oder außerhalb der beiden Wuppertaler Umweltzonen
                          beschränken. Unter "
                          <b>
                            <i>Art der Anlage</i>
                          </b>
                          " können Sie die Anzeige auf P+R- oder B+R-Anlagen
                          eingrenzen.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs "<b>Filter</b>" und in dem
                          Donut-Diagramm, das Sie rechts neben oder unter den
                          Filteroptionen finden, ausgewertet. Die Titelzeile
                          zeigt die Gesamtanzahl der P+R- und B+R-Anlagen, die
                          den von Ihnen gesetzten Filterbedingungen entsprechen.
                          Das Donut-Diagramm zeigt zusätzlich die Verteilung auf
                          die beiden Kategorien Park + Ride bzw. Bike + Ride.
                          Bewegen Sie dazu den Mauszeiger auf eines der farbigen
                          Segmente des Diagramms.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <div>
                          <p>
                            Unter "<strong>Einstellungen</strong>" können Sie im
                            Anwendungsmenü <Icon name="bars" /> festlegen, wie
                            die P+R- und B+R-Anlagen und die Hintergrundkarte
                            angezeigt werden sollen.
                          </p>
                          <p>
                            Zu den Anlagen können Sie unter "
                            <b>
                              <i>P+R / B+R Einstellungen</i>
                            </b>
                            " auswählen, ob Ihre unter "<b>Filter</b>"
                            festgelegten Filterbedingungen in einer Titelzeile
                            ausgeprägt werden oder nicht. Weiter können Sie dort
                            festlegen, ob räumlich nah beieinander liegende
                            Anlagen maßstabsabhängig zu einem Punktsymbol
                            zusammengefasst werden oder nicht. Unter "
                            <b>
                              <i>Symbolgröße</i>
                            </b>
                            " können Sie in Abhängigkeit von Ihrer
                            Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                            ob die P+R- und B+R-Anlagen mit kleinen (35 Pixel),
                            mittleren (45 Pixel) oder großen (55 Pixel) Symbolen
                            angezeigt werden.
                          </p>

                          <p>
                            Unter "
                            <strong>
                              <em>Hintergrundkarte</em>
                            </strong>
                            " können Sie auswählen, ob Sie die standardmäßig
                            aktivierte farbige Hintergrundkarte verwenden
                            möchten ("<em>Stadtplan (Tag)</em>") oder lieber
                            eine invertierte Graustufenkarte ("
                            <em>Stadtplan (Nacht)</em>"), zu der uns die von
                            vielen PKW-Navis bei Dunkelheit eingesetzte
                            Darstellungsweise inspiriert hat.{" "}
                            <strong>Hinweis</strong>: Der Stadtplan (Nacht) wird
                            Ihnen nur angeboten, wenn Ihr Browser
                            CSS3-Filtereffekte unterstützt, also z. B. nicht
                            beim Microsoft Internet Explorer. Die Nacht-Karte
                            erzeugt einen deutlicheren Kontrast mit den farbigen
                            Symbolen der P+R- bzw. B+R-Anlagen, die
                            unterschiedlichen Flächennutzungen in der
                            Hintergrundkarte lassen sich aber nicht mehr so gut
                            unterscheiden wie in der Tag-Karte. Als dritte
                            Möglichkeit steht eine <i>Luftbildkarte</i> zur
                            Verfügung, die die Anschaulichkeit des Luftbildes
                            mit der Eindeutigkeit des Stadtplans (Kartenschrift,
                            durchscheinende Linien) verbindet. Zusätzlich können
                            Sie mit dem Kontrollkästchen "<em>Umweltzonen</em>"
                            steuern, ob die Umweltzonen dargestellt werden oder
                            nicht. Die Umweltzonen lassen sich mit allen drei
                            Hintergrundkarten kombinieren. Ihre Darstellung in
                            der Karte ist vor allem dann sinnvoll, wenn Sie die{" "}
                            <Link
                              to="MeinThemenstadtplan"
                              containerId="myMenu"
                              onClick={() =>
                                setAppMenuActiveMenuSection("filter")
                              }
                              className="renderAsLink"
                            >
                              Filteroption
                            </Link>{" "}
                            "<em>innerhalb/außerhalb Umweltzone</em>" verwenden.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                },
                {
                  title: "Personalisierung",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Ihre Einstellungen bleiben auch nach einem Neustart
                          der Anwendung erhalten. (Es sei denn, Sie löschen den
                          Browser-Verlauf einschließlich der gehosteten
                          App-Daten.)
                        </p>
                      </div>
                    ),
                  },
                },
              ],
            },
          ]}
        />
      }
    />
  );
};
