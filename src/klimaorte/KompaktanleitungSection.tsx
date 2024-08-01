import Icon from "react-cismap/commons/Icon";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import GenericHelpTextForMyLocation from "react-cismap/topicmaps/docBlocks/GenericHelpTextForMyLocation";
import Section from "react-cismap/topicmaps/menu/Section";
import Activfilter from "./assets/filter_akt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faRandom } from "@fortawesome/free-solid-svg-icons";
import LicenseLuftbildkarte from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
import { getSymbolSVGGetter } from "react-cismap/tools/uiHelper";
import { featureSamples4Icons } from "./helper/iconFactory";

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
                          Die Karte <b>Hintergrund</b> bietet ihnen die
                          folgenden Hintergrundkarten an, die auf verschiedenen
                          Geodatendiensten und Geodaten basieren:
                        </p>
                        <ul>
                          <LicenseLuftbildkarte />
                          <LicenseStadtplanTagNacht />
                        </ul>
                        <ul>
                          <li>
                            <strong>Fernwärme</strong>: Kartendienst (WMS) der
                            Stadt Wuppertal in Zusammenarbeit mit der{" "}
                            <a
                              target="_wsw"
                              href="https://www.wsw-online.de/wsw-energie-wasser/privatkunden/produkte/fernwaerme/talwaerme-wuppertal/"
                            >
                              WSW GmbH
                            </a>
                            . Datengrundlage: Fernwärmeleitungen der Wuppertaler
                            Stadtwerke GmbH (Stand 02.2021) mit einer
                            Puffergröße von 10 m. ©{" "}
                            <a
                              target="_wsw"
                              href="https://www.wsw-online.de/impressum/"
                            >
                              Wuppertaler Stadtwerke GmbH
                            </a>
                            .
                          </li>
                        </ul>

                        <div>
                          Im Bereich der{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="styleaslink">
                              <FontAwesomeIcon icon={faRandom} /> Klimaorte
                            </a>
                          </span>{" "}
                          stellt die Klimaortkarte Wuppertal zusätzlich die
                          Daten der{" "}
                          <a
                            href="https://offenedaten-wuppertal.de/dataset/klimaorte-wuppertal"
                            target="_opendata"
                          >
                            Klimaorte
                          </a>{" "}
                          und eine Auswahl der{" "}
                          <a
                            href="https://offenedaten-wuppertal.de/dataset/radrouten-wuppertal"
                            target="_opendata"
                          >
                            Radrouten
                          </a>{" "}
                          (mit{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            1,5 Meter
                          </span>{" "}
                          Puffer) aus dem Open-Data-Angebot der Stadt Wuppertal
                          dar. Im Bereich der{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="styleaslink">
                              <FontAwesomeIcon icon={faRandom} /> Klimarouten
                            </a>
                          </span>{" "}
                          stellt die Klimaortkarte Wuppertal zusätzlich die
                          Daten der Klimarouten, aus dem Open-Data-Angebot
                          (dieses befindet sich in Vorbereitung) der Stadt
                          Wuppertal dar, welche ausgewählte Fahrrad- und
                          Fußwegrouten symbolisieren (
                          <span style={{ whiteSpace: "nowrap" }}>2 Meter</span>{" "}
                          Puffer um Linienstruktur). Die Routen sind in
                          Kooperation mit{" "}
                          <a href="https://www.komoot.de/" target="_komoot">
                            komoot{" "}
                          </a>{" "}
                          hergestellt worden, wobei sich im jeweiligen
                          Datenblatt <FontAwesomeIcon icon={faInfoCircle} /> der
                          Link zur externen Datenquelle befindet. Weitere
                          Objekte, welche sich in einem Abstand von{" "}
                          <span style={{ whiteSpace: "nowrap" }}>
                            60 Metern
                          </span>{" "}
                          zur Klimaroute befinden, werden ebenfalls präsentiert
                          bzw. der Route zugeordnet:
                          <ul>
                            <li>Klimaorte</li>
                            <li>
                              Aussichtspunkte und die von dort sichtbaren
                              Klimaorte (Open-Data-Angebot befindet sich in
                              Vorbereitung)
                            </li>
                            <li>
                              Zwischenstopps, als Symbol für weitere Highlights
                              im Routenverlauf (Open-Data-Angebot befindet sich
                              in Vorbereitung)
                            </li>
                            <li>
                              ausgewählte Point of Interests (
                              <a
                                href="https://offenedaten-wuppertal.de/dataset/interessante-orte-poi-wuppertal"
                                target="_opendata"
                              >
                                Interessante Orte Wuppertal
                              </a>
                              , Anpassung des Open-Data-Angebots befindet sich
                              in Vorbereitung).
                            </li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                },
              ],
            },
            {
              title: "Hintergrund",
              bsStyle: "secondary",
              contentBlockConf: {
                type: "REACTCOMP",
                content: (
                  <div>
                    <p>
                      Die Möglichkeiten zum Klima- und Umweltschutz werden
                      aktuell global diskutiert, wobei bereits auf kommunaler
                      Ebene viele Akteure und Einrichtungen an deren Umsetzung
                      beteiligt sind. An den im Kartenbild gezeigten
                      "Klimaorten" wird das Thema Klimaschutz praktiziert und
                      vermittelt; hier wird der Klimaschutz für die Bürger:innen
                      erlebbar. Viele dieser Klimaorte sind im Rahmen von
                      innovativen Projekten durch den Wissenstransfer und das
                      Engagement von Unternehmen, Vereinen, Verbänden sowie
                      Quartiersbewohner:innen entstanden, die sich aktiv für
                      Lösungen zum Klima- und Umweltschutz in ihrem Quartier und
                      für die Stadt Wuppertal einsetzen. Zu den zielführenden
                      Projekten gehören z.B. Wuppertals Klimasiedlungen, Anlagen
                      zur effizienten und/oder regenerativen Energieerzeugung,
                      Projekte der Verkehrswende sowie der Klima- und
                      Umweltbildung, an denen zahlreiche Akteure mitwirken und
                      mitgestalten.
                    </p>
                    <p>
                      Mit den Klimarouten steht den Bürger:innen eine weitere
                      Möglichkeit zur Erkundung der Klimaorte im Wuppertaler
                      Stadtgebiet zur Verfügung. Verschiedene Routen (zu Fuß
                      oder mit dem Fahrrad) führen Sie an ausgewählten
                      Klimaorten vorbei: Aussichtspunkte{" "}
                      {getSymbolSVGGetter(
                        featureSamples4Icons.aussichtspunkt?.properties
                          ?.svgBadge,
                        featureSamples4Icons.aussichtspunkt?.properties
                          ?.svgBadgeDimension
                      )(
                        20,
                        featureSamples4Icons.aussichtspunkt?.properties.color,
                        "aussichtspunktsample_"
                      )}{" "}
                      ermöglichen Ihnen den Blick auf weitere Klimaorte aus
                      größerer Entfernung zu werfen und Zwischenstopps{" "}
                      {getSymbolSVGGetter(
                        featureSamples4Icons.zwischenstopp?.properties
                          ?.svgBadge,
                        featureSamples4Icons.zwischenstopp?.properties
                          ?.svgBadgeDimension
                      )(
                        20,
                        featureSamples4Icons.zwischenstopp?.properties.color,
                        "zwischenstoppsample_"
                      )}{" "}
                      bieten Ihnen ausgewählte Highlights im Routenverlauf an.
                    </p>
                    <p>
                      Ergänzt wird dieses Angebot durch weitere interessante
                      Orte (Point of Interest, POI) entlang des Routenverlaufs.
                      Begeben Sie sich auf Erkundungstour: die Welt des
                      Klimaschutzes und nachhaltiger Ideen erwarten Sie.
                    </p>
                  </div>
                ),
              },
            },
            {
              type: "FAQS",
              configs: [
                {
                  title: "Kartendarstellung der Fachobjekte",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: (
                      <div>
                        <p>
                          Bewegen Sie den Mauszeiger im Kartenfenster auf eines
                          der farbigen Symbole (Signaturen oder dunkelblaue
                          Fahrradtrassen), mit denen die Fachobjekte des
                          Kartenthemas in der Karte dargestellt werden, um sich
                          den Namen des jeweiligen Fachobjektes anzeigen zu
                          lassen. Ein Klick auf das Symbol setzt den Fokus auf
                          dieses Fachobjekt. Es wird dann blau hinterlegt und
                          die zugehörigen Informationen (i. d. R. Name, Straße
                          und Hausnummer, Kurzinformation) werden unten rechts
                          in der Info-Box angezeigt. (Auf einem Tablet-PC wird
                          der Fokus durch das erste Antippen des
                          Fachobjekt-Symbols gesetzt, das zweite Antippen
                          blendet den Namen ein.) Außerdem werden Ihnen in der
                          Info-Box weiterführende Funktionen und
                          Kommunikationslinks zu diesem Fachobjekt angeboten.
                          Mit der Lupenfunktion <Icon name="search" /> wird die
                          Karte auf das aktuelle Fachobjekt zentriert und
                          gleichzeitig ein großer Betrachtungsmaßstab (Zoomstufe
                          14) eingestellt. Falls es mehr Informationen zu den
                          Fachobjekten gibt, als in der Info-Box dargestellt
                          werden können, können Sie sich diese über die
                          Datenblattfunktion <Icon name="info" /> anzeigen
                          lassen. Die Kommunikationslinks umfassen i. d. R.{" "}
                          <Icon name="phone" /> Telefon,{" "}
                          <Icon name="envelope-square" /> E-Mail und{" "}
                          <Icon name="external-link-square" />{" "}
                          Internet-Homepage.
                        </p>
                        <p>
                          Wenn Sie noch kein Fachobjekt im aktuellen
                          Kartenausschnitt selektiert haben, wird der Fokus
                          automatisch auf das nördlichste Objekt gesetzt. Mit
                          den Funktionen{" "}
                          <a className="renderAsLink">&lt;&lt;</a> vorheriger
                          Treffer und <a className="renderAsLink">&gt;&gt;</a>{" "}
                          nächster Treffer können Sie ausgehend von dem Objekt,
                          auf dem gerade der Fokus liegt, in nördlicher bzw.
                          südlicher Richtung alle aktuell im Kartenfenster
                          angezeigten Objekte durchmustern. Sofern die
                          Kartenanwendung nur ein einziges Fachobjekt umfasst,
                          bleibt der Fokus auf diesem Objekt, auch wenn sich
                          dieses nicht im aktuell eingestellten Kartenausschnitt
                          befindet. Die Funktionen{" "}
                          <a className="renderAsLink">&lt;&lt;</a> vorheriger
                          Treffer und <a className="renderAsLink">&gt;&gt;</a>{" "}
                          nächster Treffer werden Ihnen in diesem Fall nicht
                          angeboten. Mit der Funktion <Icon name="search" /> in
                          der Info-Box können Sie jederzeit wieder zu diesem
                          Fachobjekt zurückkehren.
                        </p>
                        <p>
                          Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-down" /> im dunkelgrau
                          abgesetzten rechten Rand der Info-Box lässt sich diese
                          so verkleinern, dass nur noch die thematische
                          Zuordnung und der Name des Fachobjektes sowie die
                          Link-Symbole angezeigt werden - nützlich für Endgeräte
                          mit kleinem Display. Mit der Schaltfläche{" "}
                          <Icon name="chevron-circle-up" /> an derselben Stelle
                          können Sie die Info-Box dann wieder vollständig
                          einblenden.
                        </p>
                        <p>
                          In vielen unserer Kartenanwendungen bieten wir Ihnen
                          zumindest zu einigen Fachobjekten Fotos oder
                          Fotoserien an. Sie finden dann ein Vorschaubild direkt
                          über der Info-Box. Klicken Sie auf das Vorschaubild,
                          um einen Bildbetrachter (&quot;Leuchtkasten&quot;) mit
                          dem Foto / der Fotoserie zu öffnen. Wenn wir hier auf
                          Bildmaterial zugreifen, das der Urheber auch selbst im
                          Internet publiziert, finden Sie im Fußbereich des
                          Bildbetrachters einen Link auf dieses Angebot.
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
