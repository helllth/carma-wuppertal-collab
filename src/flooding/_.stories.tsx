import type { Meta, StoryObj } from '@storybook/react';
import TopicMapContextProvider from 'react-cismap/contexts/TopicMapContextProvider';
import FullModal from './FullModal';
const meta: Meta = {
  title: 'Hochwassergefahrenkarte',
};

export default meta;

export const KompletterModalerDialog: StoryObj = {
  render: () => (
    <TopicMapContextProvider appKey="ais-generix-texts-tester">
      <FullModal />
    </TopicMapContextProvider>
  ),
};
