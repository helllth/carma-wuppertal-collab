import { Link } from "react-scroll";

import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import { useContext } from "react";

const MenuIntroduction = () => {
  // @ts-ignore
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  // @ts-ignore
  const {
    filterState,
    filterMode,
    filteredItems,
    shownFeatures,
    itemsDictionary,
  } = useContext(FeatureCollectionContext);
  const { setFilterState, setFilterMode } = useContext(
    FeatureCollectionDispatchContext
  );

  return (
    <span>
      Verwandeln Sie den Wuppertaler Online-Stadtplan in Ihren persönlichen
      Themenstadtplan.
      <br />
      W&auml;hlen Sie dazu unter{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="filter"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("filter")}
      >
        Mein Themenstadtplan
      </Link>{" "}
      die Themenfelder aus, zu denen Sie die Points Of Interest (POI) anzeigen
      oder ausblenden möchten. Über{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="settings"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("settings")}
      >
        Einstellungen
      </Link>{" "}
      können Sie die Karten- und POI-Darstellung an Ihre Vorlieben anpassen.
      W&auml;hlen Sie{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="help"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("help")}
      >
        Kompaktanleitung
      </Link>{" "}
      für detailliertere Bedienungsinformationen.
    </span>
  );
};

export default MenuIntroduction;
