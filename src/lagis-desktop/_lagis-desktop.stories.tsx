import type { Meta, StoryObj } from "@storybook/react";
import { menuNamesHelper } from ".";

const meta: Meta = {
  title: "Lagis-desktop",
};

export default meta;

const DisplayMenu = () => {
  const menuArr = Object.keys(menuNamesHelper);
  return menuArr.map((item) => <p>{menuNamesHelper[item]}</p>);
};

export const MenuNamesList: StoryObj = {
  render: () => {
    return <DisplayMenu />;
  },
};
