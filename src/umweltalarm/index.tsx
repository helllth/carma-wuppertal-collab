import { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { Footer } from "./Footer";
import { Introduction } from "./Introduction";
import { Legend } from "./sections/Legend";
import { Kompaktanleitung } from "./sections/Kompaktanleitung";
import { GenericDigitalTwinReferenceSection } from "../commons";
export { tooltipText } from "./tooltips";
export { searchTextPlaceholder } from "./searchTextPlaceholder";

type GetCollabedHelpComponentConfig = {
  versionString: string;
  previousSections?: JSX.Element[];
};

const getCollabedHelpComponentConfig = ({
  versionString,
  previousSections = [],
}: GetCollabedHelpComponentConfig) => {
  const MyFooter = () => {
    const { setAppMenuActiveMenuSection } =
      useContext<typeof UIDispatchContext>(UIDispatchContext);
    return (
      <Footer
        version={versionString}
        setAppMenuActiveMenuSection={setAppMenuActiveMenuSection}
      />
    );
  };

  const menuIntroduction = <Introduction />;
  const menuIcon = "bars";
  const menuTitle = "Einstellungen, Legende und Kompaktanleitung";
  const menuSections = [
    previousSections,
    <Legend />,
    <Kompaktanleitung />,
    <GenericDigitalTwinReferenceSection />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter: <MyFooter />,
  };
};

export { getCollabedHelpComponentConfig };
