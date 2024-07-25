import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { wuppertalCollabProjectVersion } from "..";
import { scroller } from "react-scroll";
import { Attribution } from "../commons/Attribution";

interface MenuFooterProps {
  title?: string;
  version: string;
}

export const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
}) => {
  // @ts-ignore
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
  console.log("xxx title", title);
  return (
    <div style={{ fontSize: "11px" }}>
      <b>Hintergrundkarten</b>: Stadtkarte 2.0 © RVR | True Orthophoto 2022 ©
      Stadt Wuppertal{" "}
      <a
        className="pleaseRenderAsLink"
        onClick={() => {
          setAppMenuActiveMenuSection("help");
          scroller.scrollTo("Datengrundlage", { containerId: "myMenu" });
        }}
      >
        (Details und Nutzungsbedingungen)
      </a>
      <br />
      <Attribution applicationName={title} applicationVersion={version} />
    </div>
  );
};
