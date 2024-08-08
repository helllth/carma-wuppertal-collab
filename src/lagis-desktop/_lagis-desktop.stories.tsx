import type { Meta, StoryObj } from "@storybook/react";
import {
  menuNamesHelper,
  drawerTextsHelper,
  overview,
  verwaltung,
  mipa,
} from ".";

const meta: Meta = {
  title: "Lagis-desktop",
};

export default meta;

const DisplayMenu = () => {
  const menuArr = Object.keys(menuNamesHelper);
  return menuArr.map((item) => <p>{menuNamesHelper[item]}</p>);
};

export const MenuNamesList: StoryObj = {
  render: () => {
    return <DisplayMenu />;
  },
};

const DisplayDrawer = () => {
  const {
    allgemeinTitle,
    synchronisierenText,
    karteTitle,
    optionaleTitle,
    abtOpt,
    baulastnachweisOpt,
    stadtFstckOpt,
    alkisLandparcels,
    hintergrundTitle,
    liegenschaftskarteGrauOpt,
    liegenschaftskarteBuntOpt,
    trueOrthoOpt,
    lbkOpt,
    stadtplanGrauOpt,
    stadtplanOpt,
  } = drawerTextsHelper;
  return (
    <div>
      <h3>{allgemeinTitle}</h3>
      <p>{synchronisierenText}</p>
      <h3 style={{ margin: "2rem 0" }}>{karteTitle}</h3>
      <h4>{optionaleTitle}</h4>
      <p>{abtOpt}</p>
      <p>{baulastnachweisOpt}</p>
      <p>{stadtFstckOpt}</p>
      <p>{alkisLandparcels}</p>
      <h3 style={{ margin: "2rem 0" }}>{hintergrundTitle}</h3>
      <p>{liegenschaftskarteGrauOpt}</p>
      <p>{liegenschaftskarteBuntOpt}</p>
      <p>{trueOrthoOpt}</p>
      <p>{lbkOpt}</p>
      <p>{stadtplanGrauOpt}</p>
      <p>{stadtplanOpt}</p>
    </div>
  );
};

export const DrawerTexts: StoryObj = {
  render: () => {
    return <DisplayDrawer />;
  },
};

const DisplayOverview = () => {
  const {
    verwaltungTitle,
    verwaltungTitleSubtitle,
    mipaTitle,
    rebeTitle,
    rebeSubtitle,
    nutzungTitle,
    nutzungSubtitle,
    vorgangeTitle,
    historieTitle,
    kassenzeichenTitle,
    dmsTitle,
  } = overview;
  return (
    <div>
      <h3>{verwaltungTitle}</h3>
      <p>{verwaltungTitleSubtitle}</p>
      <h3 style={{ margin: "2rem 0" }}>{mipaTitle}</h3>
      <h3>{rebeTitle}</h3>
      <p>{rebeSubtitle}</p>
      <h3 style={{ marginTop: "2rem" }}>{nutzungTitle}</h3>
      <p>{nutzungSubtitle}</p>
      <h3 style={{ margin: "2rem 0" }}>{vorgangeTitle}</h3>
      <h3 style={{ margin: "2rem 0" }}>{historieTitle}</h3>
      <h3 style={{ margin: "2rem 0" }}>{kassenzeichenTitle}</h3>
      <h3 style={{ margin: "2rem 0" }}>{dmsTitle}</h3>
    </div>
  );
};

export const OverviewPage: StoryObj = {
  render: () => {
    return <DisplayOverview />;
  },
};

const DisplayVerwaltung = () => {
  const { dienststellen, zusatzlicheRollen, strassen, bemerkungen } =
    verwaltung;
  return (
    <div>
      <div>
        <h3>{dienststellen.tableTitle}</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{dienststellen.dienststelleCol}</span>
          <span>{dienststellen.flacheCol}</span>
        </div>
        <p style={{ marginTop: "0.6rem" }}>
          <b>Modal title:</b> {dienststellen.modalTitle}
        </p>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h3>{zusatzlicheRollen.tableTitle}</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{zusatzlicheRollen.dienststelleCol}</span>
          <span>{zusatzlicheRollen.rolleCol}</span>
        </div>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h3>{strassen.tableTitle}</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{strassen.strasseCol}</span>
          <span>{strassen.lange}</span>
        </div>
      </div>
      <div style={{ margin: "1rem 0" }}>
        <h3>{bemerkungen.tableTitle}</h3>
        <b>Checkbox text: </b>
        {bemerkungen.checkbox}
      </div>
    </div>
  );
};

export const VerwaltungPage: StoryObj = {
  render: () => {
    return <DisplayVerwaltung />;
  },
};

const DisplayMipa = () => {
  const { mipaTable, bemerkung, querverweise } = mipa;
  return (
    <div>
      <div>
        <h3>{mipaTable.tableTitle}</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{mipaTable.lageCol}</span>
          <span>{mipaTable.aktenzeichenCol}</span>
          <span>{mipaTable.aktenzeichenCol}</span>
          <span>{mipaTable.flaecheCol}</span>
          <span>{mipaTable.nutzungCol}</span>
          <span>{mipaTable.vertragsbeginCol}</span>
          <span>{mipaTable.vertragsendeCol}</span>
          <span>{mipaTable.merkmaleCol}</span>
        </div>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h3>{bemerkung.title}</h3>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h3>{querverweise.title}</h3>
      </div>
    </div>
  );
};

export const MipaPage: StoryObj = {
  render: () => {
    return <DisplayMipa />;
  },
};
