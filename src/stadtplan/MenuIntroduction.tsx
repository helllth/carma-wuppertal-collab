import { Link } from "react-scroll";

interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}

export const MenuIntroduction: React.FC<MenuIntroductionProps> = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
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
