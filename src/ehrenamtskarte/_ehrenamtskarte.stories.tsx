import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import type { CSSProperties } from "react";
import {
  MenuIntroduction,
  MenuTitle,
  KompaktanleitungSection,
  searchTextPlaceholder,
  TextInMerkliste,
  MenuFooter,
  SectionTitleGLB,
  SectionTitleKen,
  SectionTitleZg,
  SectionTitleMerkliste,
  MenuTooltip,
} from ".";

const meta: Meta = {
  title: "Ehrenamtskarte",
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

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const TextWithEmail: StoryObj = {
  render: () => {
    return <TextInMerkliste />;
  },
};

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter
          title="Ehrenamtskarte Wuppertal"
          version={"xyz"}
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
      </TopicMapContextProvider>
    );
  },
};

export const GlobalbereicheSectionTitle: StoryObj = {
  render: () => {
    return <SectionTitleGLB />;
  },
};
export const KenntnisseSectionTitle: StoryObj = {
  render: () => {
    return <SectionTitleKen />;
  },
};
export const ZielgruppenSectionTitle: StoryObj = {
  render: () => {
    return <SectionTitleZg />;
  },
};
export const MerklisteSectionTitle: StoryObj = {
  render: () => {
    return <SectionTitleMerkliste bookmarks={0} />;
  },
};

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip />;
  },
};
