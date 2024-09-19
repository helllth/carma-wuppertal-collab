import Section from "react-cismap/topicmaps/menu/Section";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import { Ueberblick } from "./helper/Ueberblick";
import { Fachdatenquellen } from "./helper/Fachdatenquellen";
import { Hintergrundkarten } from "./helper/Hintergrundkarten";
import { ThematischerDurchstich } from "./helper/ThematischerDurchstich";
import { Infobox } from "./helper/Infobox";
import { InKartePositionieren } from "./helper/InKartePositionieren";
import { MeinStandortText } from "../../commons";
import { ObjekteSuchen } from "./helper/ObjekteSuchen";
import { AnmeldungUndOfflineBenutzung } from "./helper/AnmeldungUndOfflineBenutzung";

export const Kompaktanleitung = () => {
  return (
    <Section
      key="help"
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
                  title: "Überblick",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Ueberblick />,
                  },
                },
                {
                  title: "Fachdatenquellen",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Fachdatenquellen />,
                  },
                },
                {
                  title: "Hintergrundkarte",
                  bsStyle: "secondary",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Hintergrundkarten />,
                  },
                },
                {
                  title: "Karteninhalt verschieben und thematischer Durchstich",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <ThematischerDurchstich />,
                  },
                },
                {
                  title: "Info-Box und Datenblattansicht",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <Infobox />,
                  },
                },
                {
                  title: "In Karte positionieren",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <InKartePositionieren />,
                  },
                },
                {
                  title: "Mein Standort",
                  bsStyle: "success",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <MeinStandortText />,
                  },
                },
                {
                  title: "Objekte im Kartenfenster suchen",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <ObjekteSuchen />,
                  },
                },
                {
                  title: "Anmeldung und Offline-Benutzung",
                  bsStyle: "warning",
                  contentBlockConf: {
                    type: "REACTCOMP",
                    content: <AnmeldungUndOfflineBenutzung />,
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
