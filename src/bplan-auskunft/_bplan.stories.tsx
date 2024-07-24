import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { InfoBoxText } from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "BPlan Auskunft",
};

export default meta;

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div id="myMenu" style={modalBodyStyle}>
          <Modal visible={true} />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const TextInInfoBox: StoryObj = {
  render: () => {
    return <InfoBoxText setAppMenuVisible={action("setAppMenuVisible")} />;
  },
};
