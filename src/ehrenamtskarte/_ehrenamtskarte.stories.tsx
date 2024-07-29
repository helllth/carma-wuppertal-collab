import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";
import { MenuTitle } from "./MenuTitle";
import { MenuIntroduction } from "./MenuIntroduction";

const meta: Meta = {
  title: "Ehrenamtskarte",
};

export default meta;

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle />;
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
