import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { searchTextPlaceholder } from ".";

const meta: Meta = {
  title: "Fnp-inspektor",
};

export default meta;

export const TextInSearchPlaceholder: StoryObj = {
  render: () => {
    return <div>{searchTextPlaceholder}</div>;
  },
};
