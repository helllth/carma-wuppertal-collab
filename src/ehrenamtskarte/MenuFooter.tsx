import { Attribution } from "../commons/Attribution";

interface MenuFooterProps {
  title?: string;
  version: string;
  setAppMenuActiveMenuSection: (arg: string) => void;
}
export const MenuFooter: React.FC<MenuFooterProps> = ({
  title = document.title,
  version,
  //setAppMenuActiveMenuSection,
}) => {
  return (
    <div style={{ fontSize: "11px" }}>
      <b>Hintergrundkarten</b>: Stadtkarte 2.0 © Regionalverband Ruhr (RVR) und
      Kooperationspartner{" "}
      <a href="https://www.govdata.de/dl-de/by-2-0">
        Datenlizenz Deutschland - Namensnennung - Version 2.0
      </a>
      , Lizenzen der Ausgangsprodukte:{" "}
      <a href="https://www.govdata.de/dl-de/zero-2-0">
        Datenlizenz Deutschland - Zero - Version 2.0
      </a>{" "}
      (Amtliche Geobasisdaten) und{" "}
      <a href="https://opendatacommons.org/licenses/odbl/1-0/">ODbL</a>{" "}
      (OpenStreetMap contributors). | True Orthophoto 2022 © Stadt Wuppertal (
      <a href="https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf">
        NB-GDIKOM C
      </a>
      )
      <br />
      <Attribution applicationName={title} applicationVersion={version} />
    </div>
  );
};
