import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import meinStandpunktMarkerDoppel from "./assets/MeinStandpunktMarkerDoppel.jpg";
import meinStandpunktMarkerMitKompass from "./assets/MeinStandpunktMarkerMitKompass.jpg";
import bergischeMusikschule from "./assets/bergische_musikschule.png";
import kontakthof from "./assets/kontakthof.png";
import veranstaltungsorteZusammen from "./assets/veranstaltungsorte_zusammen.png";
import AdressMarker from "./assets/AdressMarker.jpg";

export const KompaktanleitungSection = () => {
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
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Der <strong>Kulturstadtplan Wuppertal</strong> bietet
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
                          Zusätzlich nutzt der Kulturstadtplan für die
                          Themendarstellung den Datensatz{" "}
                          <a
                            target="_legal"
                            href="https://offenedaten-wuppertal.de/dataset/veranstaltungsorte-wuppertal"
                          >
                            Veranstaltungsorte Wuppertal
                          </a>{" "}
                          aus dem Open-Data-Angebot der Stadt Wuppertal.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der POI",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Die POI der kulturellen Einrichtungen werden in der
                          Karte durch Punktsymbole in Form von Piktogrammen mit
                          farbigem Hintergrund dargestellt. Für einige klar
                          definier- und unterscheidbare Kategorien (Clubs,
                          Filmtheater, Museen und Galerien, Theater) verwenden
                          wir feste Kombinationen von Piktogramm und
                          Hintergrundfarbe. In der Kategorie "Sonstige
                          Veranstaltungsorte" werden dagegen verschiedene
                          Piktogramme mit der gleichen Hintergrundfarbe (Ocker)
                          verwendet. Hierunter fallen zum einen Einrichtungen
                          mit einem individuellen Profil, die unterschiedlichen
                          Veranstaltungsarten Raum geben{" "}
                          <img alt="Cluster" height="20" src={kontakthof} />.
                          Zum anderen umfasst diese Kategorie alle POI, die nur
                          in zweiter Linie Veranstaltungsorte sind. So ist z. B.
                          die Bergische Musikschule{" "}
                          <img
                            alt="Cluster"
                            height="20"
                            src={bergischeMusikschule}
                          />{" "}
                          in erster Linie als Bildungseinrichtung eingestuft, in
                          der aber auch Konzerte, Lesungen und
                          Theateraufführungen stattfinden.
                        </p>
                        <p>
                          Räumlich nah beieinander liegende Veranstaltungsorte
                          werden standardmäßig maßstabsabhängig zu größeren
                          Punkten zusammengefasst, mit der Anzahl der
                          repräsentierten POI im Zentrum{" "}
                          <img
                            alt="Cluster"
                            height="30"
                            src={veranstaltungsorteZusammen}
                          />
                          . Vergrößern Sie ein paar Mal durch direktes Anklicken
                          eines solchen Punktes oder mit <Icon name="plus" />{" "}
                          die Darstellung, so werden die zusammengefassten POI
                          Schritt für Schritt in die kleineren Symbole für die
                          konkreten Einzel-POI zerlegt. Ab einer bestimmten
                          Maßstabsstufe (Zoomstufe 12) führt ein weiterer Klick
                          dazu, dass eine Explosionsgraphik der
                          zusammengefassten POI angezeigt wird.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "POI auswählen und abfragen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf einen
                          konkreten Einzel-POI, um sich seine Bezeichnung
                          anzeigen zu lassen. Ein Klick auf das zugehörige
                          POI-Symbol setzt den Fokus auf diesen POI. Er wird
                          dann blau hinterlegt und die zugehörigen Informationen
                          (Bezeichnung, Info-Text und ggf. Adresse) werden in
                          der Info-Box (unten rechts) angezeigt. (Auf einem
                          Tablet-PC wird der Fokus durch das erste Antippen des
                          Angebots gesetzt, das zweite Antippen blendet die
                          Bezeichnung ein.) Außerdem werden Ihnen in der
                          Info-Box weiterführende (Kommunikations-) Links zum
                          POI angezeigt: <Icon name="external-link-square" />{" "}
                          Internet, <Icon name="envelope-square" /> E-Mail und{" "}
                          <Icon name="phone" /> Telefon. Bei POI, zu denen im
                          Terminkalender von{" "}
                          <a href="https://wuppertal-live.de">
                            www.wuppertal-live.de
                          </a>{" "}
                          Veranstaltungen geführt werden, finden sie zusätzlich
                          noch eine <Icon name="calendar" /> Verknüpfung zu
                          wuppertal-live.de, wo sie für viele Veranstaltungen
                          auch Online-Tickets erwerben können.
                        </p>
                        <p>
                          Wenn Sie noch nicht aktiv einen bestimmten POI im
                          aktuellen Kartenausschnitt selektiert haben, wird der
                          Fokus automatisch auf den nördlichsten POI gesetzt.
                          Mit den Funktionen <a>&lt;&lt;</a> vorheriger Treffer
                          und <a>&gt;&gt;</a> nächster Treffer können Sie in
                          nördlicher bzw. südlicher Richtung alle aktuell im
                          Kartenfenster angezeigten POI durchmustern.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die Kategorisierung und
                          die Bezeichnung des POI sowie die Link-Symbole
                          angezeigt werden - nützlich für Endgeräte mit kleinem
                          Display. Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-up" /> an derselben Stelle
                          können Sie die Info-Box dann wieder vollständig
                          einblenden.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Um eine bestimmte Stelle des Stadtgebietes zu
                          erkunden, geben Sie den Anfang eines Stadtteils
                          (Stadtbezirk oder Quartier), einer Adresse, eines
                          Straßennamens oder eines POI im Eingabefeld links
                          unten ein (mindestens 2 Zeichen). In der
                          inkrementellen Auswahlliste werden Ihnen passende
                          Treffer angeboten. (Wenn Sie weitere Zeichen eingeben,
                          wird der Inhalt der Auswahlliste angepasst.) Durch das
                          vorangestellte Symbol erkennen Sie, ob es sich dabei
                          um einen <Icon name="circle" /> Stadtbezirk, ein{" "}
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
                          Suchbegriffen mit Punktgeometrie (Adresse, Straße,
                          POI) wird außerdem ein großer Maßstab (Zoomstufe 14)
                          eingestellt und ein Marker{" "}
                          <img alt="Cluster" src={AdressMarker} /> auf der
                          Zielposition platziert. Bei Suchbegriffen mit
                          Flächengeometrie (Stadtbezirk, Quartier) wird der
                          Maßstab so eingestellt, dass die Fläche vollständig
                          dargestellt werden kann. Zusätzlich wird der Bereich
                          außerhalb dieser Fläche abgedunkelt
                          (Spotlight-Effekt).
                        </p>
                        <p>
                          Durch Anklicken des Werkzeugs <Icon name="times" />{" "}
                          links neben dem Eingabefeld können Sie die Suche
                          zurücksetzen (Entfernung von Marker bzw. Abdunklung,
                          Löschen des Textes im Eingabefeld).
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "secondary",
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
                          . Durch Antippen dieses Kreises können Sie einen
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
                  title: "Mein Kulturstadtplan",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Unter "<strong>Mein Kulturstadtplan</strong>" finden
                          sie im Anwendungsmenü zwei alternative Möglichkeiten
                          vor, die Menge der angezeigten POI gemäß Ihren
                          Vorlieben einzuschränken. Auf zwei angedeuteten
                          Karteikarten wird zum einen das Filtern nach
                          Kategorien von Einrichtungen angeboten, zum anderen
                          das Filtern nach Kategorien von Veranstaltungen, die
                          an den zugehörigen POI typischerweise angeboten
                          werden. Der Titel der gerade nicht sichtbaren
                          Karteikarte wird als <a>Hyperlink</a> dargestellt Zum
                          Wechsel zwischen den beiden Karteikarten klicken Sie
                          auf den jeweils verfügbaren Link.
                        </p>
                        <p>
                          Auf den beiden Karteikarten wird Ihnen eine Liste von
                          Einrichtungs- bzw. Veranstaltungskategorien angeboten.
                          Die Auswahl erfolgt durch Anklicken des (leeren)
                          Kontrollkästchens vor dem jeweiligen Listenelement,
                          die Abwahl durch erneutes Anklicken dieses Kästchens.
                          Die beiden Filterbereiche werden nicht logisch
                          miteinander verknüpft. Für die Filterung wird immer
                          nur die Auswahl auf der im Anwendungsmenü sichtbaren
                          Karteikarte ausgewertet.
                        </p>
                        <p>
                          Als Vorschau für die Wirkung ihrer Filtereinstellungen
                          wird Ihnen auf beiden Karteikarten ein Donut-Diagramm
                          angezeigt, das die Anzahl der herausgefilterten POI
                          und ihre Verteilung auf die Einrichtungskategorien
                          anzeigt. Bewegen Sie dazu den Mauszeiger auf eines der
                          farbigen Segmente des Diagramms. (Bei einem Gerät mit
                          Touchscreen tippen Sie auf eines der farbigen
                          Segmente.)
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Einstellungen",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Unter "<strong>Einstellungen</strong>
                          " können Sie im Anwendungsmenü <Icon name="bars" />{" "}
                          festlegen, wie die POI und die Hintergrundkarte
                          angezeigt werden sollen. Zu den POI können Sie
                          auswählen, ob Ihre unter "
                          <strong>Mein Kulturstadtplan</strong>" festgelegte
                          Filterung in einer Titelzeile ausgeprägt wird oder
                          nicht. Weiter können Sie festlegen, ob räumlich nah
                          beieinander liegende POI maßstabsabhängig zu einem
                          Punktsymbol zusammengefasst werden oder nicht. Unter "
                          <em>
                            <strong>Symbolgröße</strong>
                          </em>
                          " können Sie in Abhängigkeit von Ihrer
                          Bildschirmauflösung und Ihrem Sehvermögen auswählen,
                          ob die POI mit kleinen (25 Pixel), mittleren (35
                          Pixel) oder großen (45 Pixel) Symbolen angezeigt
                          werden.
                        </p>
                        <p>
                          Unter "
                          <em>
                            <strong>Hintergrundkarte</strong>
                          </em>
                          " können Sie auswählen, ob Sie die standardmäßig
                          aktivierte farbige Hintergrundkarte verwenden möchten
                          ("<em>Stadtplan (Tag)</em>") oder lieber eine
                          invertierte Graustufenkarte ("
                          <em>Stadtplan (Nacht)</em>"), zu der uns die von
                          vielen PKW-Navis bei Dunkelheit eingesetzte
                          Darstellungsweise inspiriert hat.{" "}
                          <strong>Hinweis:</strong> Der Stadtplan (Nacht) wird
                          Ihnen nur angeboten, wenn Ihr Browser
                          CSS3-Filtereffekte unterstützt, also z. B. nicht beim
                          Microsoft Internet Explorer. Die Nacht-Karte erzeugt
                          einen deutlicheren Kontrast mit den farbigen
                          POI-Symbolen, die unterschiedlichen Flächennutzungen
                          in der Hintergrundkarte lassen sich aber nicht mehr so
                          gut unterscheiden wie in der Tag-Karte. Als dritte
                          Möglichkeit steht eine Luftbildkarte zur Verfügung,
                          die die Anschaulichkeit des Luftbildes mit der
                          Eindeutigkeit des Stadtplans (Kartenschrift,
                          durchscheinende Linien) verbindet.{" "}
                        </p>
                        <p>
                          Im Vorschaubild sehen Sie direkt die prinzipielle
                          Wirkung ihrer Einstellungen.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Personalisierung",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Ihre Filterauswahl und Einstellungen bleiben auch nach
                        einem Neustart der Anwendung erhalten. (Es sei denn, Sie
                        löschen den Browser-Verlauf einschließlich der
                        gehosteten App-Daten.) Damit können Sie unseren
                        Kulturstadtplan mit wenigen Klicks dauerhaft für sich
                        optimieren.
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
