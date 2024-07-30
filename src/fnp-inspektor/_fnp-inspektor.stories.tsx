import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  searchTextPlaceholder,
  MenuIntroduction,
  RechtsplanUndArbeitskarte,
  InKartePositionieren,
  MeinStandort,
} from ".";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";

const meta: Meta = {
  title: "Fnp-inspektor",
};

export default meta;

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};

export const IntroductionMenu: StoryObj = {
  render: () => {
    return <MenuIntroduction />;
  },
};
export const RechtsplanUndArbeitskarteSection: StoryObj = {
  render: () => {
    return <RechtsplanUndArbeitskarte />;
  },
};
export const InKartePositionierenSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <InKartePositionieren
            setAppMenuActiveMenuSection={action("setAppMenuActiveMenuSection")}
          />
        </div>
      </TopicMapContextProvider>
    );
  },
};

export const MeinStandortSection: StoryObj = {
  render: () => {
    return (
      <TopicMapContextProvider appKey="storybook-appkey">
        <div>
          <MeinStandort />
        </div>
      </TopicMapContextProvider>
    );
  },
};
