import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { wuppertalCollabProjectVersion } from "..";
import { scroller } from "react-scroll";
import { Attribution } from "../commons/Attribution";

export const MenuFooter = ({ title = document.title, version }) => {
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
