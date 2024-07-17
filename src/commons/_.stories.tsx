import type { Meta, StoryObj } from '@storybook/react';
import Attribution from './Attribution';
import GenericDigitalTwinReferenceTextComponent from './GenericDigitalTwinReferenceTextComponent';
const meta: Meta = {
  title: 'Commons',
  args: {
    applicationName: 'GreatApp',
    applicationVersion: 'abcd',
  },
  argTypes: {
    applicationName: {
      control: 'text',
      description: 'Name of the application',
    },
    applicationVersion: {
      control: 'text',
      description: 'Version of the application',
    },
  },
};

export default meta;

export const attribution: StoryObj = {
  render: (args) => <Attribution {...args} />,
};

export const genericDigitalTwinReferenceTextComponent: StoryObj = {
  render: () => <GenericDigitalTwinReferenceTextComponent />,
};
