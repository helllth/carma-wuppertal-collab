import type { Meta, StoryObj } from "@storybook/react";
import { Introduction, Menu10Datengrundlagen } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";

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
          menuSections={[<Menu10Datengrundlagen />]}
          visible={true}
        />
        ,
      </TopicMapContextProvider>
    );
  },
};
