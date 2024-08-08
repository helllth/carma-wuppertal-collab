import type { Meta, StoryObj } from "@storybook/react";
import { Attribution, GenericDigitalTwinReferenceSection } from ".";
import { GenericDigitalTwinReferenceTextComponent } from ".";
import { MenuFooter } from ".";
import { wuppertalCollabProjectVersion } from "..";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
const meta: Meta = {
  title: "Commons",
  args: {
    applicationName: "GreatApp",
    applicationVersion: "abcd",
  },
  argTypes: {
    applicationName: {
      control: "text",
      description: "Name of the application",
    },
    applicationVersion: {
      control: "text",
      description: "Version of the application",
    },
  },
};

export default meta;

export const version: StoryObj = {
  render: () => <div>{wuppertalCollabProjectVersion}</div>,
};

export const attribution: StoryObj = {
  // @ts-expect-error: TODO: fix type
  render: (args) => <Attribution {...args} />,
};

export const genericDigitalTwinReferenceTextComponent: StoryObj = {
  render: () => <GenericDigitalTwinReferenceTextComponent />,
};

export const genericDigitalTwinReferenceSection: StoryObj = {
  render: () => <GenericDigitalTwinReferenceSection />,
};

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter
          title="TopicMaps Wuppertal"
          version={"1.23.0"}
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
      </TopicMapContextProvider>
    );
  },
};
