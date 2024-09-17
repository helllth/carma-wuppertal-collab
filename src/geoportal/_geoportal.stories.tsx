import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  getCollabedHelpComponentConfig,
  tooltipText,
  searchTextPlaceholder,
  geoElements,
  backgroundSettings,
} from ".";
import {
  getCollabedHelpComponentConfig as getCollabedHelpElementsConfig,
  LibHelperOverlay as DisplayContentHelper,
  useOverlayHelper,
} from "../helper-overlay/index";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import SecondaryInfoModal from "./sachdatenabfrage-modals/EMobiModal";

const meta: Meta = {
  title: "Geoportal",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const versionString = "xyz";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const EMobiModal: StoryObj = {
  render: () => {
    return (
      <SecondaryInfoModal
        feature={{
          properties: {
            standort: "Hardt / Elisenhöhe",
            adresse: "Otto-Schell-Weg 18",
            status: "true",
            foto: "https://www.wuppertal.de/geoportal/emobil/autos/fotos/hardt_elisenhoehe.jpg",
            zusatzinfo: "Parkplatz Hardt / Elisenhöhe",
            bemerkung: "Erste Parkreihe nach der Einfahrt.",
            versatz: "1",
            vorhandene_stecker: "true",
            stecker1:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/Schuko_plug ! 2 x Schuko Steckdose (3.7kW)",
            stecker2:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/Type_2_mennekes ! 2 x Typ 2 Steckdose (22kW)",
            parkgebuehr:
              "Während des Ladevorgangs max. 4 Std. kostenfrei. Der Ladeplatz ist kein Parkplatz.",
            zugang1: "App (Ladepay)",
            zugang2: "Ladekarte (WSW eMobil flat)",
            zugang3: "Ladekarte für den Verbund ladenetz.de",
            anzahl: "4",
            abrechnung:
              "https://www.wsw-online.de/fileadmin/Energie-Wasser/Nachhaltigkeit/Klimafonds_Antrag/2016_07_Preisblatt-WSW_eMOBIL_FLAT.pdf",
            offen:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_24-7.png",
            strom: "AC",
            betreiber: "WSW Energie & Wasser AG - eMobilität",
            betreiberadresse: "Bromberger Straße 39-41",
            betreiberort: "42281 Wuppertal",
            betreiberhomepage:
              "https://www.wsw-online.de/wsw-energie-wasser/privatkunden/nachhaltigkeit/emobilitaet/",
            betreiberemail: "emobil@wsw-online.de",
            betreibertelefon: "+49-202-5695140",
            gruen:
              "https://www.wuppertal.de/geoportal/emobil/images-autos/pikto_gruener_strom.png",
            signatur: "svg-signaturen/pikto_e-auto_blau_freigestellt_2.svg",
            signatur2: "svg-signaturen/pikto_e-auto_blau_freigestellt_3.svg",
          },
        }}
        setOpen={() => {}}
      />
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextTooltip: StoryObj = {
  render: () => {
    return <div>{tooltipText}</div>;
  },
};

export const Menüleiste: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENULEISTE", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const LayerButtons: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("LAYERBUTTONS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Hintergrund: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("HINTERGRUND", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Menü: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MENU", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Zoom: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("ZOOM", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Vollbild: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("VOLLBILD", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const MeinePosition: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "MEINE_POSITION",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Rathaus: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("RATHAUS", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Messungen: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig("MESSUNGEN", geoElements);
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const GazetteerSuche: StoryObj = {
  render: () => {
    const element = getCollabedHelpElementsConfig(
      "GAZETTEER_SUCHE",
      geoElements
    );
    const config = useOverlayHelper(element);
    return (
      <div>
        <DisplayContentHelper config={config} />
      </div>
    );
  },
};

export const Background: StoryObj = {
  render: () => {
    const { transparency, color } = backgroundSettings;
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          backgroundColor: color,
          opacity: transparency,
        }}
      ></div>
    );
  },
};
