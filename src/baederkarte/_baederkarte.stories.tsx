import type { Meta, StoryObj } from "@storybook/react";
import { KompaktanleitungSection, Footer } from ".";
import type { CSSProperties } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Bäderkarte",
};

export default meta;

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
