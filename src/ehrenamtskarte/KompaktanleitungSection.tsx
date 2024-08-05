import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import Section from "react-cismap/topicmaps/menu/Section";
import PoiZusammen from "./assets/colorcircle_k.jpg";
import AdressMarker from "./assets/AdressMarker.jpg";
import Merkliste from "./assets/merkliste_akt.jpg";
import Activfilter from "./assets/filter_akt.jpg";
import meinStandpunktMarkerDoppelIcon from "./assets/meinStandpunktMarkerDoppelIcon.jpg";
import meinStandpunktMarkerMitKompass from "./assets/MeinStandpunktMarkerMitKompass.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

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
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Diese Anwendung gibt Ihnen einen Überblick über die
                          angebotenen Ehrenamtsstellen aus der Datenbank des
                          Zentrums für gute Taten. Genau diese Daten werden vom
                          Zentrum für gute Taten auch als Open-Data-Datensatz{" "}
                          <a
                            target="_opendata"
                            href="https://offenedaten-wuppertal.de/dataset/ehrenamtsstellen-wuppertal"
                          >
                            Ehrenamtsstellen Wuppertal
                          </a>{" "}
                          im Open-Data-Portal der Stadt Wuppertal publiziert.
                          Die Darstellung der Einsatzorte als Karte macht es
                          Ihnen dabei leicht, Ehrenamtsstellen in Ihrer Nähe zu
                          finden. Einer Ehrenamtsstelle sind im Allgemeinfall
                          mehrere <em>Aufgaben</em> und <em>Zielgruppen</em>{" "}
                          zugeordnet.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Kartendarstellung der Angebote",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Die in der Karte für die Punktdarstellungen der
                          Angebote verwendeten Farben stehen jeweils für eine
                          bestimmte Kombination der Kategorisierungen in den
                          Bereichen <em>Aufgaben</em> und <em>Zielgruppen</em>.
                          <br />
                          Eng beieinander liegende Angebote werden
                          maßstabsabhängig zu größeren Punkten zusammengefasst,
                          mit der Anzahl der repräsentierten Angebote im Zentrum{" "}
                          <img alt="Cluster" src={PoiZusammen} />.
                          <br />
                          Vergrößern Sie ein paar Mal durch direktes Anklicken
                          eines solchen Punktes oder mit <Icon name="plus" />{" "}
                          die Darstellung, so werden die zusammengefassten
                          Angebote Schritt für Schritt in die kleineren
                          Punktdarstellungen für die konkreten Einzelangebote
                          zerlegt. Nur Angebote, die sich auf denselben Standort
                          beziehen, werden in jedem Maßstab als Zusammenfassung
                          dargestellt. In diesen Fällen führt ein weiterer Klick
                          ab einer bestimmten Maßstabsstufe (Zoomstufe 12) dazu,
                          dass eine Explosionsgrafik der zusammengefassten
                          Angebote angezeigt wird.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Um die angebotenen Ehrenamtsstellen an einer
                          bestimmten Stelle des Stadtgebietes zu erkunden, geben
                          Sie den Anfang eines Stadtteils (Stadtbezirk oder
                          Quartier), einer Adresse, eines Straßennamens oder
                          eines interessanten Ortes (auch Point of Interest oder
                          kurz POI genannt) im Eingabefeld ein (mindestens 2
                          Zeichen). In der inkrementellen Auswahlliste werden
                          Ihnen passende Treffer angeboten. (Wenn sie weitere
                          Zeichen eingeben, wird der Inhalt der Auswahlliste
                          angepasst.) Durch das vorangestellte Symbol erkennen
                          Sie, ob es sich dabei um einen <Icon name="circle" />{" "}
                          Stadtbezirk, ein <Icon name="pie-chart" /> Quartier,
                          eine <Icon name="home" /> Adresse, eine{" "}
                          <Icon name="road" /> Straße ohne zugeordnete
                          Hausnummern, einen <Icon name="tag" /> POI, die{" "}
                          <Icon name="tags" /> alternative Bezeichnung eines POI
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
                  bsStyle: "success",
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
                            src={meinStandpunktMarkerDoppelIcon}
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
                  title: "Angebote selektieren",
                  bsStyle: "info",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger auf ein konkretes Angebot,
                          um sich seine Bezeichnung anzeigen zu lassen. Ein
                          Klick auf den farbigen Punkt setzt den Fokus auf
                          dieses Angebot. Es wird dann blau hinterlegt und die
                          zugehörigen Informationen (Angebotsnummer und
                          Bezeichnung) werden in der Info-Box angezeigt. (Auf
                          einem Tablet-PC wird der Fokus durch das erste
                          Antippen des Angebots gesetzt, das zweite Antippen
                          blendet die Bezeichnung ein.)
                          <br />
                          Wenn Sie den Fokus noch nicht aktiv auf ein bestimmtes
                          Angebot im aktuellen Kartenausschnitt gesetzt haben,
                          wird er automatisch auf das nördlichste Angebot
                          gesetzt.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Angebote merken",
                  bsStyle: "info",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Mit dem Werkzeug <Icon name="plus-square" /> in der
                          Info-Box rechts neben der Bezeichnung können Sie das
                          Angebot, das gerade den Fokus hat, in Ihre Merkliste
                          aufnehmen. Es wird dann in der Karte durch einen
                          überlagerten Stern gekennzeichnet.
                          <br />
                          Auch die Zusammenfassungen werden mit einem
                          überlagerten Stern gekennzeichnet, wenn sie mindestens
                          ein Angebot umfassen, das Sie in Ihre Merkliste
                          aufgenommen haben.
                          <br />
                          Wenn Sie den Fokus auf ein Angebot setzen, das sich
                          bereits in Ihrer Merkliste befindet, verwandelt sind
                          das Werkzeug <Icon name="plus-square" /> in{" "}
                          <Icon name="check-square" />. Mit einem Klick hierauf
                          entfernen Sie das Angebot aus Ihrer Merkliste.
                        </p>
                      </div>
                    ),
                  },
                },
                {
                  title: "Merkliste öffnen",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <p>
                        Mit dem Werkzeug <Icon name="bookmark" /> in der
                        Info-Box rechts neben der Angebotsnummer können Sie Ihre
                        Merkliste öffnen. Es wird hellgrau ausgeprägt, wenn Ihre
                        Merkliste leer ist und dunkelgrau, sobald sich
                        mindestens ein Angebot in Ihrer Merkliste befindet.
                        Alternativ erreichen Sie Ihre Merkliste auch durch
                        Öffnen des Anwendungsmenüs mit dem Werkzeug{" "}
                        <Icon name="bars" /> in der rechten oberen Ecke.
                        <br />
                        In Ihrer Merkliste finden Sie eine Auflistung aller
                        Angebote, die Sie in die Merkliste eingestellt haben.
                        Der Inhalt Ihrer Merkliste bleibt auch nach einem
                        Neustart der Anwendung erhalten. (Es sei denn, Sie
                        löschen den Browser-Verlauf einschließlich der
                        gehosteten App-Daten.){" "}
                      </p>
                    ),
                  },
                },
                {
                  title: "Funktionen der Merkliste",
                  bsStyle: "primary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Rechts neben jedem Listeneintrag in der Merkliste
                          finden Sie zwei Werkzeuge:
                        </p>
                        <ul>
                          <li>
                            Mit <Icon name="search-location" /> können Sie das
                            zugehörige Angebot in der Karte anzeigen. Es wird
                            dann zentriert in einem großen Maßstab (Zoomstufe
                            13) dargestellt, zusätzlich wird der Fokus auf
                            dieses Angebot gesetzt. Wenn das Angebot Bestandteil
                            einer Zusammenfassung ist, wird dazu die
                            Explosionsgraphik angezeigt.
                          </li>

                          <li>
                            Mit <Icon name="minus-square" color="#C33D17" />{" "}
                            können Sie das zugehörige Angebot aus Ihrer
                            Merkliste entfernen.
                          </li>
                        </ul>
                        <p>
                          In der rechten oberen Ecke Ihrer Merkliste finden Sie
                          drei Werkzeuge, die sich auf den gesamten Inhalt der
                          Merkliste auswirken:
                        </p>
                        <ul>
                          <li>
                            Mit <Icon name="trash" /> können Sie Ihre Merkliste
                            komplett löschen.
                          </li>

                          <li>
                            Mit <Icon name="map" /> aktivieren Sie einen Modus,
                            in dem Ihnen in der Karte nur die Angebote aus Ihrer
                            Merkliste angezeigt werden. Dieser Modus wird Ihnen
                            durch ein rotes Banner{" "}
                            <img alt="Merkliste" src={Merkliste} /> oben in der
                            Info-Box signalisiert. Dort können Sie den
                            Merklistenfilter durch Klicken auf{" "}
                            <Icon name="times" /> auch wieder ausschalten.
                          </li>

                          <li>
                            Im Menü <Icon name="share-square" /> finden Sie
                            Möglichkeiten, den Inhalt der Merkliste mit anderen
                            zu teilen.
                            <ul>
                              <li>
                                Zentrale Funktion ist dabei <Icon name="copy" />{" "}
                                Link kopieren: hiermit kopieren sie einen Link
                                in die Zwischenablage, der die Ehrenamtskarte
                                mit dem Inhalt Ihrer Merkliste öffnet. Der
                                Inhalt Ihrer Merkliste wird als Liste über den
                                Parameter "cart" übergeben. Wenn ein Nutzer, der
                                bereits eigene Angebote in seiner Merkliste hat,
                                diesen Link anklickt, werden die übergebenen
                                Angebote an seine Merkliste angehängt.
                              </li>
                              <li>
                                Mit <Icon name="at" /> Merkliste per Mail senden
                                schicken Sie diesen Link zur Vereinbarung eines
                                Beratungstermins per E-Mail an das Zentrum für
                                Gute Taten.
                              </li>
                              <li>
                                (Weitere Möglichkeiten zum Teilen Ihrer
                                Merkliste sind in Vorbereitung.)
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                },
                {
                  title: " Angebote filtern",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        {" "}
                        <p>
                          Über das Anwendungsmenü <Icon name="bars" /> in der
                          rechten oberen Ecke können Sie Filter einstellen, um
                          die in der Karte angezeigten Angebote an Ihre
                          Interessen anzupassen. Dazu werden Ihnen in der
                          Auswahlliste "<em>Ich suche nach</em>" alle
                          Kategorisierungen in den Bereichen <em>Aufgaben</em>{" "}
                          und <em>Zielgruppen</em> zur Auswahl angeboten. Es
                          werden alle Angebote gefunden, die vom Zentrum für
                          Gute Taten mit mindestens einem der von Ihnen
                          ausgewählten Begriffe kategorisiert worden sind
                          (logisches "oder"). Die Treffermenge steigt dadurch
                          bei mehreren Suchbegriffen schnell an.
                        </p>
                        <p>
                          Als Gegengewicht dazu können Sie in der Liste "
                          <em>Ich schließe aus</em>" auch Ausschlusskriterien
                          definieren.
                        </p>
                        <p>
                          Eine alternative Eingabemöglichkeit für Ihre Such- und
                          Ausschlussbedingungen bieten Ihnen die zwei Leitfragen
                          unterhalb der Auswahllisten. Durch Klicken auf die
                          jeweilige Frage erhalten Sie eine Übersicht über alle
                          zugehörigen Kategorien und können diese mit{" "}
                          <Icon name="thumbs-up" /> oder{" "}
                          <Icon name="thumbs-down" /> als Such- oder
                          Ausschlussbegriffe markieren. Die Filter-Auswahllisten
                          und Einstellungen unter den Leitfragen sind
                          vollständig miteinander synchronisiert. Wenn Sie
                          Filtereinstellungen festgelegt haben, wird Ihnen dies
                          durch ein graues Banner{" "}
                          <img alt="Filter-Banner" src={Activfilter} /> oben in
                          der Info-Box signalisiert. Die in Klammern angezeigte
                          Zahl ist die Anzahl der aktuell von Ihnen zur
                          Filterung verwendeten Such- und Ausschlussbegriffe.
                        </p>
                        <p>
                          Über das Banner können Sie die Filterung durch Klicken
                          auf <Icon name="times" /> wieder zurücksetzen.
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
