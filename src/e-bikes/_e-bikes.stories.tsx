import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  KompaktanleitungSection,
  MenuTitle,
  MenuIntroduction,
  InfoBoxTextTitle,
  searchTextPlaceholder,
  InfoBoxTextContent,
  MenuTooltip,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";

const meta: Meta = {
  title: "E-bikes",
};

export default meta;

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle />;
  },
};
export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const Kompaktanleitung: StoryObj = {
  render: () => {
    const modalBodyStyle: CSSProperties = {
      overflowY: "auto",
      overflowX: "hidden",
      maxHeight: "100vh",
    };

    return (
      <div id="myMenu" style={modalBodyStyle}>
        <KompaktanleitungSection />
      </div>
    );
  },
};

export const TextInInfoBoxTitle: StoryObj = {
  render: () => {
    return <InfoBoxTextTitle />;
  },
};
export const TextInInfoBoxContent: StoryObj = {
  render: () => {
    return <InfoBoxTextContent />;
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
  },
};
