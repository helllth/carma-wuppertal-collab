import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import {
  searchTextPlaceholder,
  InfoBoxTextTitle,
  MenuTooltip,
  MenuTitle,
  MenuIntroduction,
  MenuFooter,
} from ".";

const meta: Meta = {
  title: "Klimaorte",
};

export default meta;

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
// export const TextInInfoBoxContent: StoryObj = {
//   render: () => {
//     return <InfoBoxTextContent />;
//   },
// };

export const menuTooltipString: StoryObj = {
  render: () => {
    return <MenuTooltip appMode="ORTE" />;
  },
};

export const TitleMenu: StoryObj = {
  render: () => {
    return <MenuTitle appMode="ORTE" />;
  },
};

export const IntroductionMenu: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MenuIntroduction
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
            appMode="ORTE"
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const MenuFußzeile: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <MenuFooter
          title="Klimaortkarte Wuppertal"
          version={"xyz"}
          setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
        />
      </TopicMapContextProvider>
    );
  },
};
