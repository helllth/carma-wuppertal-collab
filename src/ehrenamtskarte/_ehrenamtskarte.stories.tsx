import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";
import { MenuTitle } from "./MenuTitle";

const meta: Meta = {
  title: "Ehrenamtskarte",
};

export default meta;

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle />;
  },
};
