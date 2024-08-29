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
} from ".";

const meta: Meta = {
  title: "Wupp-topic-maps",
};

export default meta;

export const IntroductionHitze: StoryObj = {
  render: () => {
    return <Introduction />;
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
          ]}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};
