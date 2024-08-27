import type { Meta, StoryObj } from "@storybook/react";
import {
  Introduction,
  Menu10Datengrundlagen,
  Menu20MeinKassenzeichen,
  Menu30KartenhintergruendeText,
  Menu40Anleitung,
  Menu41Mailservice,
  Menu42Aenderungen,
  Menu50FAQ,
  Menu60Datenschutz,
  AnderungswunscheIntroduction,
  anderungswunscheSimpleTexts,
  AnderungswunscheHint,
  AnderungswunscheIntroductionAus,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Section from "react-cismap/topicmaps/menu/Section";

const meta: Meta = {
  title: "Verdis-online",
};
export default meta;

export const MenuIntroduction: StoryObj = {
  render: () => {
    return <Introduction />;
  },
};
export const ModalMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          menuSections={[
            <Menu10Datengrundlagen />,
            <Menu20MeinKassenzeichen />,
            <Section
              key="kartenhintergruende"
              sectionKey="kartenhintergruende"
              sectionTitle="Hintergrundkarten"
              sectionBsStyle="info"
              sectionContent={<Menu30KartenhintergruendeText />}
            />,
            <Menu40Anleitung />,
            <Menu41Mailservice />,
            <Menu42Aenderungen />,
            <Menu50FAQ />,
            <Menu60Datenschutz />,
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const IntroductionAnderungswunsche: StoryObj = {
  render: () => {
    return (
      <div>
        <AnderungswunscheIntroduction />
        <AnderungswunscheIntroductionAus />
      </div>
    );
  },
};
export const TitleAnderungswunsche: StoryObj = {
  render: () => {
    return <span>{anderungswunscheSimpleTexts.andrTitle}</span>;
  },
};
export const HintAnderungswunsche: StoryObj = {
  render: () => {
    const { draftHint } = anderungswunscheSimpleTexts;
    return (
      <div>
        <p>{draftHint}</p>
        <AnderungswunscheHint />
      </div>
    );
  },
};
