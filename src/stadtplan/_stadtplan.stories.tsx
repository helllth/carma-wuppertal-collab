import type { Meta, StoryObj } from "@storybook/react";
import {
  InfoBoxTextContent,
  InfoBoxTextTitle,
  MenuIntroduction,
  MenuTooltip,
  searchTextPlaceholder,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { KompaktanleitungSection } from ".";
import { MenuTitle } from ".";
import type { CSSProperties } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Stadtplan",
};

export default meta;

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

export const TitleMenu: StoryObj = {
  render: () => {
    return (
      <MenuTitle title="Themenstadtplan, Einstellungen und Kompaktanleitung" />
    );
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
  },
};

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
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
