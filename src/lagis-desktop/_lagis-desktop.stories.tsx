import type { Meta, StoryObj } from "@storybook/react";
import {
  MenuNameUbersicht,
  MenuNameVerwaltungsbereiche,
  MenuNameMIPA,
  MenuNameREBA,
  MenuNameNutzung,
  MenuNameVorgange,
  MenuNameHistorie,
  MenuNameKassenzeichen,
  MenuNameDMS,
} from ".";

const meta: Meta = {
  title: "Lagis-desktop",
};

export default meta;

export const MenuItemsUbersicht: StoryObj = {
  render: () => {
    return <MenuNameUbersicht />;
  },
};

export const MenuItemsVerwaltungsbereiche: StoryObj = {
  render: () => {
    return <MenuNameVerwaltungsbereiche />;
  },
};

export const MenuItemsMIPA: StoryObj = {
  render: () => {
    return <MenuNameMIPA />;
  },
};

export const MenuItemsREBA: StoryObj = {
  render: () => {
    return <MenuNameREBA />;
  },
};

export const MenuItemsNutzung: StoryObj = {
  render: () => {
    return <MenuNameNutzung />;
  },
};

export const MenuItemsVorgange: StoryObj = {
  render: () => {
    return <MenuNameVorgange />;
  },
};

export const MenuItemsHistorie: StoryObj = {
  render: () => {
    return <MenuNameHistorie />;
  },
};

export const MenuItemsKassenzeichen: StoryObj = {
  render: () => {
    return <MenuNameKassenzeichen />;
  },
};

export const MenuItemsMenuNameDMS: StoryObj = {
  render: () => {
    return <MenuNameDMS />;
  },
};
