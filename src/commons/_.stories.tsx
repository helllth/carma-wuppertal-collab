import type { Meta, StoryObj } from '@storybook/react';
import TopicMapContextProvider from 'react-cismap/contexts/TopicMapContextProvider';
import Attribution from './Attribution';
import GenericDigitalTwinReferenceTextComponent from './GenericDigitalTwinReferenceTextComponent';
const meta: Meta = {
  title: 'Commons',
};

export default meta;

export const attribution: StoryObj = {
  render: () => (
    <Attribution applicationName="GreatApp" applicationVersion="abcd" />
  ),
};

export const genericDigitalTwinReferenceTextComponent: StoryObj = {
  render: () => <GenericDigitalTwinReferenceTextComponent />,
};
