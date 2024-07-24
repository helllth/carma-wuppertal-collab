import type { Meta, StoryObj } from '@storybook/react';
import { KompaktanleitungSection } from './KompaktanleitungSection';

const meta: Meta = {
  title: 'Bäderkarte',
};

export default meta;

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle = {
      overflowY: 'auto',
      overflowX: 'hidden',
      maxHeight: '100vh',
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>
    );
  },
};
