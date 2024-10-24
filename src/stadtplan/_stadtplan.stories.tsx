import type { Meta, StoryObj } from "@storybook/react";
import {
  InfoBoxTextContent,
  InfoBoxTextTitle,
  MenuIntroduction,
  MenuTooltip,
  searchTextPlaceholder,
  Footer,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { KompaktanleitungSection } from ".";
import { MenuTitle } from ".";
import type { CSSProperties } from "react";
import { action } from "@storybook/addon-actions";
import Section from "react-cismap/topicmaps/menu/Section";
import {
  FilterStyle,
  getFilterHeader,
  KompaktAnleitungStyle,
  KompaktAnleitungTitle,
} from "./SectionTitles";

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
    return <MenuTitle />;
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

export const MenuFooter: StoryObj = {
  render: () => {
    return (
      <Footer
        version="xyz"
        setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
      />
    );
  },
};

export const SecionTitles: StoryObj = {
  render: () => {
    return (
      <div>
        <Section
          sectionBsStyle={FilterStyle}
          sectionTitle={getFilterHeader(100, 10)}
        />
        <Section
          sectionBsStyle={KompaktAnleitungStyle}
          sectionTitle={KompaktAnleitungTitle}
        />
      </div>
    );
  },
};
