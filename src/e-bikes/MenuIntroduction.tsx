interface MenuIntroductionProps {
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuIntroduction: React.FC<MenuIntroductionProps> = ({
  setAppMenuActiveMenuSection,
}: MenuIntroductionProps) => {
  return (
    <span>
      Benutzen Sie die Auswahlmöglichkeiten unter{" "}
      <a
        onClick={() => setAppMenuActiveMenuSection("filter")}
        className="useAClassNameToRenderProperLink"
      >
        Filter
      </a>
      , um die in der Karte angezeigten Lade- und Verleihstationen für
      E-Fahrräder auf die für Sie relevanten Stationen zu beschränken. Über{" "}
      <a
        onClick={() => setAppMenuActiveMenuSection("settings")}
        className="useAClassNameToRenderProperLink"
      >
        Einstellungen
      </a>{" "}
      können Sie die Darstellung der Hintergrundkarte und der Stationen an Ihre
      Vorlieben anpassen. Wählen Sie{" "}
      <a
        onClick={() => setAppMenuActiveMenuSection("help")}
        className="useAClassNameToRenderProperLink"
      >
        Kompaktanleitung
      </a>{" "}
      für detailliertere Bedienungsinformationen.
    </span>
  );
};
