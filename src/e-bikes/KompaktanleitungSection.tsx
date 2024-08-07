import Section from "react-cismap/topicmaps/menu/Section";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import { getSymbolSVG } from "./helper/styler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Icon from "react-cismap/commons/Icon";
import { Link } from "react-scroll";
import EbikeCluster from "./assets/ebikes_cluster.png";
import meinStandpunktMarkerDoppel from "./assets/MeinStandpunktMarkerDoppel.jpg";
import meinStandpunktMarkerMitKompass from "./assets/MeinStandpunktMarkerMitKompass.jpg";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export const KompaktanleitungSection = () => {
  const chargingOnlineSVG = getSymbolSVG(
    30,
    "#1EA342",
    "pr",
    "onlineSVGinHELP"
  );
  const chargingOfflineSVG = getSymbolSVG(
    30,
    "#999999",
    "pr",
    "offlineSVGinHELP"
  );
  const rentingSVG = getSymbolSVG(30, "#EC7529", "pr", "verleihSVGinHELP");
  return (
    <Section
      sectionKey="help"
      sectionTitle="Kompaktanleitung"
      sectionBsStyle="default"
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
                          Die <strong>E-Fahrrad-Karte Wuppertal</strong> bietet
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
                            Bodenauflösung 5 cm. (True Orthophoto: Aus
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
                          Zusätzlich nutzt die E-Fahrrad-Karte die Datensätze{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/verleih-e-fahrr%C3%A4der-wuppertal"
                          >
                            Verleih E-Fahrräder Wuppertal
                          </a>
                          und{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/ladestationen-e-fahrr%C3%A4der-wuppertal"
                          >
                            Ladestationen E-Fahrräder Wuppertal
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Stationen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Zur Darstellung der Ladestationen in der Karte verwenden
                        wir zwei unterschiedliche Symbole für die Ladestationen,
                        die derzeit in Betrieb ("online") {chargingOnlineSVG}{" "}
                        sind, und diejenigen, die wegen länger dauernder
                        Maßnahmen nicht in Betrieb ("offline"){" "}
                        {chargingOfflineSVG} sind. Zur Darstellung der
                        Verleihstationen verwenden wir das Symbol {rentingSVG}.
                        Die Farben der Symbole werden in der Titelzeile der
                        Info-Box unten rechts aufgegriffen. Zusätzlich wird dort
                        der Typ (Ladestation für E-Fahrräder bzw. Verleihstation
                        von E-Fahrrädern) und bei den Ladestationen auch der
                        Betriebszustand (online oder offline) wiederholt.
                        Räumlich nah beieinander liegende Anlagen werden
                        standardmäßig maßstabsabhängig zu größeren
                        Kreis-Symbolen zusammengefasst, jeweils mit der Anzahl
                        der repräsentierten Anlagen im Zentrum{" "}
                        <img alt="Cluster" width="32" src={EbikeCluster} />.
                        Vergrößern Sie ein paar Mal durch direktes Anklicken
                        eines solchen Punktes oder mit{" "}
                        <FontAwesomeIcon icon={faPlus} /> die Darstellung, so
                        werden die zusammengefassten Stationen Schritt für
                        Schritt in die kleineren Symbole für die
                        Einzel-Stationen zerlegt.
                      </p>
                    ),
                  },
                },
                {
                  title: "Ladestationen / Verleihstationen abfragen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der Symbole für die Stationen, um sich den Namen der
                          Station anzeigen zu lassen. Ein Klick auf das Symbol
                          setzt den Fokus auf diese Station. Sie wird dann blau
                          hinterlegt und die zugehörigen Informationen (Name,
                          ggf. Lagebeschreibung, Adresse) werden in der Info-Box
                          angezeigt. (Auf einem Tablet-PC wird der Fokus durch
                          das erste Antippen des Symbols gesetzt, das zweite
                          Antippen blendet den Namen ein.) Durch Anklicken des
                          Symbols <Icon name="info" /> rechts neben dem Namen
                          der Station öffnen Sie das Datenblatt mit den
                          vollständigen Informationen zu dieser Station
                          einschließlich einer Verknüpfung zu eventuellen
                          weiteren Informationen des Betreibers oder
                          Eigentümers. Mit dem Lupensymbol{" "}
                          <Icon name="search" /> links daneben wird die Karte
                          auf die Station, die gerade den Fokus hat, zentriert
                          und gleichzeitig ein großer Betrachtungsmaßstab
                          (Zoomstufe 14) eingestellt. Mit den Symbolen{" "}
                          <Icon name="phone" /> und{" "}
                          <Icon name="external-link-square" /> rechts daneben
                          können Sie den Betreiber oder Inhaber via Smartphone
                          direkt anrufen oder zu seiner Website wechseln.
                        </p>
                        <p>
                          Wenn Sie noch keine Station im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf die nördlichste Station gesetzt. Mit
                          den Funktionen <a>&lt;&lt;</a> vorheriger Treffer und{" "}
                          <a>&gt;&gt;</a> nächster Treffer können Sie ausgehend
                          von der Station, auf der gerade der Fokus liegt, in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten Stationen durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch der Typ der Station und
                          ggf. ihr Betriebszustand (Verleihstation oder
                          Ladestation online / offline), ihr Name und die
                          Symbole <Icon name="search-location" />,{" "}
                          <Icon name="info" />, <Icon name="phone" /> und{" "}
                          <Icon name="external-link-square" /> angezeigt werden
                          - nützlich für Endgeräte mit kleinem Display. Mit der
                          Schaltfläche <Icon name="chevron-circle-up" /> an
                          derselben Stelle können Sie die Info-Box wieder
                          vollständig einblenden.
                        </p>
                        <p>
                          Ein kleines Foto über der Info-Box vermittelt Ihnen
                          bei den meisten Stationen einen Eindruck vom Aussehen
                          der Station vor Ort. Klicken Sie auf dieses
                          Vorschaubild, um einen Bildbetrachter ("Leuchtkasten")
                          mit dem Foto zu öffnen.
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
                        {" "}
                        <p>
                          Um direkt zu einer Lade- oder Verleihstation zu
                          gelangen, geben Sie den Anfang des Namens dieser
                          Station im Eingabefeld links unten ein (mindestens 2
                          Zeichen). In der inkrementellen Auswahlliste werden
                          Ihnen passende Treffer angeboten. (Wenn Sie weitere
                          Zeichen eingeben, wird der Inhalt der Auswahlliste
                          angepasst.) Sie können auch andere Suchbegriffe
                          eingeben, nämlich Stadtteil (Stadtbezirk oder
                          Quartier), Adresse, Straßenname oder POI. Durch das in
                          der Auswahlliste vorangestellte Symbol erkennen Sie,
                          ob es sich bei einem Treffer um eine{" "}
                          <Icon name="charging-station" /> Ladestation, eine{" "}
                          <Icon name="bicycle" /> Verleihstation, einen{" "}
                          <Icon name="circle" /> Stadtbezirk, ein{" "}
                          <Icon name="pie-chart" /> Quartier, eine{" "}
                          <Icon name="home" /> Adresse, eine{" "}
                          <Icon name="road" /> Straße ohne zugeordnete
                          Hausnummern, einen <Icon name="tag" /> POI, die{" "}
                          <Icon name="tags" /> alternative Bezeichnung eines
                          POI, eine <Icon name="child" /> Kindertageseinrichtung
                          oder eine <Icon name="graduation-cap" /> Schule
                          handelt.
                        </p>
                        <p>
                          Nach der Auswahl eines Treffers aus der Liste wird die
                          Karte auf die zugehörige Position zentriert. Bei
                          Suchbegriffen mit Punktgeometrie (Ladestation,
                          Verleihstationen, Adresse, Straße, POI) wird außerdem
                          ein großer Maßstab (Zoomstufe 14) eingestellt und ein
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
                          Wenn Sie die Karte wie oben beschrieben auf eine
                          Station positionieren, erhält diese sofort den Fokus,
                          sodass die zugehörigen Informationen direkt in der
                          Info-Box angezeigt werden. Voraussetzung dafür ist,
                          dass die aktuellen{" "}
                          <Link to="MeinThemenstadtplan" containerId="myMenu">
                            Filtereinstellungen
                          </Link>{" "}
                          die Darstellung der Ladestation in der Karte erlauben.
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
                          Im Bereich "<b>Filter</b>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> die in der Karte
                          angezeigten Lade- und Verleihstationen so ausdünnen,
                          dass nur die für Sie interessanten Stationen übrig
                          bleiben. Standardmäßig sind die Einstellungen hier so
                          gesetzt, dass alle Stationen angezeigt werden.
                        </p>

                        <p>
                          Mit der Optionsgruppe "
                          <b>
                            <i>Typ</i>
                          </b>
                          " können Sie die Kartenanzeige auf Ladestationen oder
                          Verleihstationen beschränken. Mit den Optionsgruppen "
                          <b>
                            <i>Verfügbarkeit</i>
                          </b>
                          ", "
                          <b>
                            <i>Öffnungszeiten</i>
                          </b>
                          ", "
                          <b>
                            <i>Ökostrom</i>
                          </b>
                          " und "
                          <b>
                            <i>Ladebox vorhanden</i>
                          </b>
                          " können Sie die Kartenanzeige auf Ladestationen
                          beschränken, die aktuell verfügbar (online) sind, die
                          durchgehend (jeweils 24 Stunden an 7 Tagen die Woche)
                          benutzbar sind, die ökologisch erzeugten Strom
                          bereitstellen oder bei denen eine abschließbare
                          Ladebox vorhanden ist. Diese Optionsgruppen werden
                          deaktiviert, wenn die Kartenanzeige unter "
                          <i>
                            <b>Typ</b>
                          </i>
                          " auf "<i>nur Verleihstationen</i>" beschränkt wird.
                          Mit der in jeder dieser Gruppen verfügbaren Option "
                          <i>alle Ladestationen</i>" wird das jeweilige
                          Filterkriterium nicht ausgewertet. Alle
                          Filterkriterien werden mit einem logischen "und"
                          kombiniert: Wenn Sie z. B. unter "
                          <b>
                            <i>Öffnungszeiten</i>
                          </b>
                          " den Wert "<i>24/7</i>" wählen und unter "
                          <b>
                            <i>Ökostrom</i>
                          </b>
                          " den Wert "<i>nur Ökostrom-Ladestationen</i>", werden
                          alle Stationen angezeigt, die durchgehend erreichbar
                          sind <b>und</b> ökologisch erzeugten Strom
                          bereitstellen.
                        </p>
                        <p>
                          Ihre Einstellungen werden direkt in der blauen
                          Titelzeile des Bereichs "<b>Filter</b>" und in dem
                          Donut-Diagramm, das Sie rechts neben oder unter den
                          Filteroptionen finden, ausgewertet. Die Titelzeile
                          zeigt die Gesamtanzahl der Stationen, die den von
                          Ihnen gesetzten Filterbedingungen entsprechen. Das
                          Donut-Diagramm zeigt zusätzlich die Verteilung auf die
                          drei Kategorien Verleihstationen, Ladestationen
                          (online) und Ladestationen (offline). Bewegen Sie dazu
                          den Mauszeiger auf eines der farbigen Segmente des
                          Diagramms.
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
                        <p>
                          Unter "<strong>Einstellungen</strong>" können Sie im
                          Anwendungsmenü <Icon name="bars" /> festlegen, wie die
                          Stationen und die Hintergrundkarte angezeigt werden
                          sollen.
                        </p>
                        <p>
                          Zu den Stationen können Sie unter "
                          <b>
                            <i>Einstellungen Lade- und Verleihstationen</i>
                          </b>
                          " auswählen, ob Ihre unter "<b>Filter</b>"
                          festgelegten Filterbedingungen in einer Titelzeile
                          ausgeprägt werden oder nicht. Weiter können Sie dort
                          festlegen, ob räumlich nah beieinander liegende
                          Stationen maßstabsabhängig zu einem Punktsymbol
                          zusammengefasst werden oder nicht. Unter "
                          <b>
                            <i>Symbolgröße</i>
                          </b>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die Stationen mit kleinen (35 Pixel), mittleren (45
                          Pixel) oder großen (55 Pixel) Symbolen angezeigt
                          werden.
                        </p>

                        <p>
                          Unter "
                          <strong>
                            <em>Hintergrundkarte</em>
                          </strong>
                          " können Sie auswählen, ob Sie die standardmäßig
                          aktivierte farbige Hintergrundkarte verwenden möchten
                          ("
                          <em>Stadtplan (Tag)</em>") oder lieber eine
                          invertierte Graustufenkarte ("
                          <em>Stadtplan (Nacht)</em>"), zu der uns die von
                          vielen PKW-Navis bei Dunkelheit eingesetzte
                          Darstellungsweise inspiriert hat.{" "}
                          <strong>Hinweis</strong>: Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen Symbolen
                          der Lade- und Verleihstationen, die unterschiedlichen
                          Flächennutzungen in der Hintergrundkarte lassen sich
                          aber nicht mehr so gut unterscheiden wie in der
                          Tag-Karte. Als dritte Möglichkeit steht eine{" "}
                          <i>Luftbildkarte</i> zur Verfügung, die die
                          Anschaulichkeit des Luftbildes mit der Eindeutigkeit
                          des Stadtplans (Kartenschrift, durchscheinende Linien)
                          verbindet.
                        </p>

                        <p>
                          In der{" "}
                          <b>
                            <i>Vorschau</i>
                          </b>{" "}
                          sehen Sie direkt die Wirkung ihrer Einstellungen in
                          einem fest eingestellten Kartenausschnitt.
                        </p>
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
                      <p>
                        Ihre Einstellungen bleiben auch nach einem Neustart der
                        Anwendung erhalten. (Es sei denn, Sie löschen den
                        Browser-Verlauf einschließlich der gehosteten
                        App-Daten.)
                      </p>
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
