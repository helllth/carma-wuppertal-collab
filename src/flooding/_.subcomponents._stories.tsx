import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TopicMapContextProvider from 'react-cismap/contexts/TopicMapContextProvider';
import { UIDispatchContext } from 'react-cismap/contexts/UIContextProvider';
import {
  Help05Introduction,
  Help99Footer,
} from '@cismet-collab/rainhazardmaps-base-texts';
import Help10AllgemeineHinweise from './lib/help/Help10AllgemeineHinweise';
import Help15Datengrundlage from './lib/help/Help15Datengrundlage';
import Help20Karteninhalt from './lib/help/Help20Karteninhalt';
import Help30InKartePositionieren from './lib/help/Help30InKartePositionieren';
import Help35KoppelungMitStarkregengefahrenkarte from './lib/help/Help35KoppelungMitStarkregengefahrenkarte';
import Help40MeinStandort from './lib/help/Help40MeinStandort';
import Help50WasserstandAbfragen from './lib/help/Help50WasserstandAbfragen';
import Help60SimulierteSzenarien from './lib/help/Help60SimulierteSzenarien';
import Help70AussagekraftDerSimulationen from './lib/help/Help70AussagekraftDerSimulationen';
import Help80ModellfehlerMelden from './lib/help/Help80ModellfehlerMelden';
import Help90Haftungsausschluss from './lib/help/Help90Haftungsausschluss';
import Help98DigitalerZwilling from './lib/help/Help98DigitalerZwilling';
import DigiTalLogo from './lib/help/assets/Logo_DigiTalZwilling.png';

const meta: Meta = {
  title: 'Einzelkomponenten',
};

export default meta;

const createStory = (Component) => {
  return {
    render: () => (
      <TopicMapContextProvider appKey="ais-generix-texts-tester">
        <Component />
      </TopicMapContextProvider>
    ),
  };
};

export const Introduction: StoryObj = createStory(Help05Introduction);
export const AllgemeineHinweise: StoryObj = createStory(
  Help10AllgemeineHinweise
);
export const Datengrundlage: StoryObj = createStory(Help15Datengrundlage);
export const Karteninhalt: StoryObj = createStory(Help20Karteninhalt);
export const InKartePositionieren: StoryObj = createStory(
  Help30InKartePositionieren
);
export const KoppelungMitStarkregengefahrenkarte: StoryObj = createStory(
  Help35KoppelungMitStarkregengefahrenkarte
);
export const MeinStandort: StoryObj = createStory(Help40MeinStandort);
export const WasserstandAbfragen: StoryObj = createStory(
  Help50WasserstandAbfragen
);
export const SimulierteSzenarien: StoryObj = createStory(
  Help60SimulierteSzenarien
);
export const AussagekraftDerSimulationen: StoryObj = createStory(
  Help70AussagekraftDerSimulationen
);
export const ModellfehlerMelden: StoryObj = createStory((props) => (
  <Help80ModellfehlerMelden email="starkregen@cismet.de" />
));
export const Haftungsausschluss: StoryObj = createStory(
  Help90Haftungsausschluss
);
export const DigitalerZwilling: StoryObj = createStory((props) => (
  <Help98DigitalerZwilling email="starkregen@cismet.de" />
));
export const Footer: StoryObj = {
  render: () => {
    const MyFooter = () => {
      const { setAppMenuActiveMenuSection } =
        React.useContext(UIDispatchContext);
      return (
        <Help99Footer
          appName="Teilzwilling Hochwassergefahrenkarte Wuppertal"
          taglineModelling={
            <div>
              <b>Modellierung</b>:{' '}
              <a
                target="_wsw"
                href="https://www.gis-rest.nrw.de/atomFeed/rest/atom/182925c1-879f-4054-bd69-b6f28e05b270.html"
              >
                Land NRW
              </a>{' '}
              (2. Umsetzungszyklus der EU-HWRM-RL 12/2019)
            </div>
          }
          version="0.test.0"
          versionString="0.test.0"
          reactCismapRHMVersion="0.test.0"
          hintergrundkartenText="True Orthophoto 2022, Amtliche Basiskarte (ABK), Hillshade © Stadt Wuppertal | Stadtkarte 2.0 © RVR | basemap.de web Vektor © GeoBasis-DE / BKG"
          logo={
            <a
              className="renderAsLink"
              onClick={() => {
                setAppMenuActiveMenuSection('zwilling');
              }}
            >
              <img
                style={{
                  width: 50,
                  margin: 5,
                  marginTop: -5,
                  cursor: 'pointer',
                }}
                align="right"
                src={DigiTalLogo}
              />
            </a>
          }
        />
      );
    };

    return (
      <TopicMapContextProvider appKey="ais-generix-texts-tester">
        <MyFooter />
      </TopicMapContextProvider>
    );
  },
};
