import Icon from "react-cismap/commons/Icon";

const NW = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};
export const ListWithSymbolsKlimaorte = () => {
  return (
    <p>
      Durch das in der Auswahlliste vorangestellte Symbol erkennen Sie, ob es
      sich bei einem Treffer um einen{" "}
      <NW>
        <Icon name="circle" /> Stadtbezirk
      </NW>
      , ein{" "}
      <NW>
        <Icon name="pie-chart" /> Quartier
      </NW>
      , eine{" "}
      <NW>
        <Icon name="home" /> Adresse
      </NW>
      , eine{" "}
      <NW>
        <Icon name="road" /> Straße ohne Hausnummern
      </NW>
      , eine{" "}
      <NW>
        <Icon name="child" /> Kindertageseinrichtung
      </NW>
      , eine{" "}
      <NW>
        <Icon name="graduation-cap" /> Schule
      </NW>{" "}
      oder einen{" "}
      <NW>
        <Icon name="sun" /> Klimaort
      </NW>{" "}
      handelt.
    </p>
  );
};
