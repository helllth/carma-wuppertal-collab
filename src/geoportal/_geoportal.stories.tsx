import type { Meta, StoryObj } from "@storybook/react";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  getCollabedHelpComponentConfig,
  tooltipText,
  searchTextPlaceholder,
  geoElements,
  backgroundSettings,
} from ".";
import {
  getCollabedHelpComponentConfig as getCollabedHelpElementsConfig,
  LibHelperOverlay as DisplayContentHelper,
  useOverlayHelper,
} from "../helper-overlay/index";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import SecondaryInfoModal from "./sachdatenabfrage-modals/EMobiModal";

const meta: Meta = {
  title: "Geoportal",
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => {
    const versionString = "xyz";
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <ModalApplicationMenu
          {...getCollabedHelpComponentConfig({
            versionString,
          })}
          visible={true}
        />
      </TopicMapContextProvider>
    );
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextTooltip: StoryObj = {
  render: () => {
    return <div>{tooltipText}</div>;
  },
};
