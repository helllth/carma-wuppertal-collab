import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import { action } from "@storybook/addon-actions";
import {
  Introduction,
  Datengrundlage,
  Karteninhalt,
  InKartePositionieren,
  Standort,
  Modellberechnungen,
  Aussagekraft,
  tooltipText,
  menuTitle,
  Footer,
  searchTextPlaceholder,
} from ".";

const meta: Meta = {
  title: "Hitzeinderstadt",
};

export default meta;

export const IntroductionHitze: StoryObj = {
  render: () => {
    return <Introduction />;
  },
};

export const MenuTooltip: StoryObj = {
  render: () => {
    return <span>{tooltipText}</span>;
  },
};

export const MenuTitle: StoryObj = {
  render: () => {
    return <span>{menuTitle}</span>;
  },
};

export const ModalHelpAndInfoHitze: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          menuSections={[
            <Datengrundlage
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <Karteninhalt
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <InKartePositionieren />,
            <Standort />,
            <Modellberechnungen
              setAppMenuActiveMenuSection={action(
                "setAppMenuActiveMenuSection"
              )}
            />,
            <Aussagekraft />,
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const MenuFooter: StoryObj = {
  render: () => {
    return (
      <Footer
        version="xyz"
        setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
      />
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};
