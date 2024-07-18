import { Link } from "react-scroll";

export const MenuIntroduction = ({ setAppMenuActiveMenuSection }) => {
  return (
    <span>
      Benutzen Sie die Auswahlmöglichkeiten unter{" "}
      <Link
        className="useAClassNameToRenderProperLink"
        to="filter"
        containerId="myMenu"
        smooth={true}
        delay={100}
        onClick={() => setAppMenuActiveMenuSection("filter")}
      >
        Filter
      </Link>{" "}
      um die in der Karte angezeigten Ladestationen für E-Autos auf die für Sie
      relevanten Stationen zu beschränken. Über{" "}
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
      können Sie die Darstellung der Hintergrundkarte und der Ladestationen an
      Ihre Vorlieben anpassen. Wählen Sie{" "}
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
