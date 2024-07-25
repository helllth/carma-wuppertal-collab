import type { Meta, StoryObj } from "@storybook/react";
import { MenuIntroduction } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

const meta: Meta = {
  title: "Stadtplan",
};

export default meta;

export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction />
        </div>
      </TopicMapContextProvider>
    );
  },
};
