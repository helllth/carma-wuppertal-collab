import type { Meta, StoryObj } from "@storybook/react";
import { Attribution } from ".";
import { GenericDigitalTwinReferenceTextComponent } from ".";
import { wuppertalCollabProjectVersion } from "..";
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
