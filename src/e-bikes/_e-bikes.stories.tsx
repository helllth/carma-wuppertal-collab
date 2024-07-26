import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MenuTitle } from ".";
import { MenuIntroduction } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

const meta: Meta = {
  title: "E-bikes",
};

export default meta;

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle title="Filter, Einstellungen und Kompaktanleitung" />;
  },
};
export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};
