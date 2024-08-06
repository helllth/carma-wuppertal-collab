import { Attribution } from "../commons/Attribution";

interface MenuFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
}: MenuFooterProps) => {
  return (
    <div style={{ fontSize: "11px" }}>
      <strong>Hintergrundkarte</strong>: Stadtkarte 2.0 © RVR | Amtliche
      Basiskarte (ABK), B-Plan-Geltungsbereiche (
      <a
        target="ackmore"
        href="https://offenedaten-wuppertal.de/dataset/rechtsverbindliche-bebauungspl%C3%A4ne-wuppertal"
      >
        rechtswirksam{" "}
      </a>{" "}
      |{" "}
      <a
        target="ackmore"
        href="https://offenedaten-wuppertal.de/dataset/laufende-bebauungsplanverfahren-wuppertal"
      >
        laufende Verfahren
      </a>
      ) © Stadt Wuppertal |
      <a
        target="ackmore"
        href="http://www.geodatenzentrum.de/geodaten/gdz_rahmen.gdz_div?gdz_spr=deu&amp;gdz_akt_zeile=4&amp;gdz_anz_zeile=4&amp;gdz_unt_zeile=0&amp;gdz_user_id=0"
      >
        {" "}
        WebAtlasDE
      </a>{" "}
      © BKG{" "}
      <a
        className="useAClassNameToRenderProperLink"
        onClick={() => setAppMenuActiveMenuSection("hintergrundkarte")}
      >
        (Details und Nutzungsbedingungen)
      </a>
      <br />
      <Attribution applicationName={title} applicationVersion={version} />
    </div>
  );
};
