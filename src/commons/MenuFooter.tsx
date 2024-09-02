import { Attribution } from "../commons/Attribution";
import { scroller } from "react-scroll";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";

interface MenuFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}
const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
  setAppMenuActiveMenuSection,
}: MenuFooterProps) => {
  return (
    <div
      style={{
        fontSize: "11px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <b>Hintergrundkarten</b>: Stadtkarte 2.0 © RVR | True Orthophoto 2022
        © Stadt Wuppertal{" "}
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

      <img
        style={{
          marginBottom: 0,
          marginLeft: 20,
          float: "right",
          height: "60px",
        }}
        alt="Logo DigiTal Zwilling"
        height="60"
        src={Logo_DigiTalZwilling}
      />
    </div>
  );
};

export default MenuFooter;
