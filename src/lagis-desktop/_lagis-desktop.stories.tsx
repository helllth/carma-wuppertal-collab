import type { Meta, StoryObj } from "@storybook/react";
import {
  menuNamesHelper,
  drawerTextsHelper,
  overview,
  verwaltung,
  mipa,
  rebe,
  nutzung,
  vorgange,
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
      <h4>{allgemeinTitle}</h4>
      <p>{synchronisierenText}</p>
      <h4 style={{ margin: "2rem 0" }}>{karteTitle}</h4>
      <h4>{optionaleTitle}</h4>
      <p>{abtOpt}</p>
      <p>{baulastnachweisOpt}</p>
      <p>{stadtFstckOpt}</p>
      <p>{alkisLandparcels}</p>
      <h4 style={{ margin: "2rem 0" }}>{hintergrundTitle}</h4>
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
      <h4>{verwaltungTitle}</h4>
      <p>{verwaltungTitleSubtitle}</p>
      <h4 style={{ margin: "2rem 0" }}>{mipaTitle}</h4>
      <h4>{rebeTitle}</h4>
      <p>{rebeSubtitle}</p>
      <h4 style={{ marginTop: "2rem" }}>{nutzungTitle}</h4>
      <p>{nutzungSubtitle}</p>
      <h4 style={{ margin: "2rem 0" }}>{vorgangeTitle}</h4>
      <h4 style={{ margin: "2rem 0" }}>{historieTitle}</h4>
      <h4 style={{ margin: "2rem 0" }}>{kassenzeichenTitle}</h4>
      <h4 style={{ margin: "2rem 0" }}>{dmsTitle}</h4>
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
        <h4>{dienststellen.tableTitle}</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{dienststellen.dienststelleCol}</span>
          <span>{dienststellen.flacheCol}</span>
        </div>
        <p style={{ marginTop: "0.6rem" }}>
          <b>Modal title:</b> {dienststellen.modalTitle}
        </p>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h4>{zusatzlicheRollen.tableTitle}</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{zusatzlicheRollen.dienststelleCol}</span>
          <span>{zusatzlicheRollen.rolleCol}</span>
        </div>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h4>{strassen.tableTitle}</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{strassen.strasseCol}</span>
          <span>{strassen.lange}</span>
        </div>
      </div>
      <div style={{ margin: "1rem 0" }}>
        <h4>{bemerkungen.tableTitle}</h4>
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
        <h4>{mipaTable.tableTitle}</h4>
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
        <h4>{bemerkung.title}</h4>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h4>{querverweise.title}</h4>
      </div>
    </div>
  );
};

export const MipaPage: StoryObj = {
  render: () => {
    return <DisplayMipa />;
  },
};

const DisplayRebe = () => {
  const { rebeTable } = rebe;
  return (
    <div>
      <div>
        <h4>{rebeTable.tableTitle}</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{rebeTable.farbeCol}</span>
          <span>{rebeTable.rechtCol}</span>
          <span>{rebeTable.artCol}</span>
          <span>{rebeTable.artrechtCol}</span>
          <span>{rebeTable.nummerCol}</span>
          <span>{rebeTable.eintragungCol}</span>
          <span>{rebeTable.loschungCol}</span>
          <span>{rebeTable.bemerkungCol}</span>
        </div>
      </div>
    </div>
  );
};

export const RebePage: StoryObj = {
  render: () => {
    return <DisplayRebe />;
  },
};

const DisplayNutzung = () => {
  const { nutzungTable, overviewTable } = nutzung;
  return (
    <div>
      <div>
        <h4>{nutzungTable.tableTitle}</h4>
        <div
          style={{ display: "flex", gap: "0.8rem 1.4rem", flexWrap: "wrap" }}
        >
          <span>{nutzungTable.nutzungCol}</span>
          <span>{nutzungTable.buchungsCol}</span>
          <span>{nutzungTable.anlageklasseCol}</span>
          <span>{nutzungTable.bezeichnungCol}</span>
          <span>{nutzungTable.flacheCol}</span>
          <span>{nutzungTable.preisCol}</span>
          <span>{nutzungTable.gesamtpreisCol}</span>
          <span>{nutzungTable.stilleCol}</span>
          <span>{nutzungTable.buchwertCol}</span>
          <span>{nutzungTable.bemerkungCol}</span>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <h4>{overviewTable.tableTitle}</h4>
        <div
          style={{ display: "flex", gap: "0.8rem 1.4rem", flexWrap: "wrap" }}
        >
          <span>{overviewTable.anlageklasseCol}</span>
          <span>{overviewTable.summeCol}</span>
        </div>
      </div>
    </div>
  );
};

export const NutzungPage: StoryObj = {
  render: () => {
    return <DisplayNutzung />;
  },
};

const DisplayVorgange = () => {
  const { vorgangeTable, vertragsdaten, qkb } = vorgange;
  return (
    <div>
      <div>
        <h4>{vorgangeTable.vorgangeTitle}</h4>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{vorgangeTable.vertragsartCol}</span>
          <span>{vorgangeTable.nummerCol}</span>
          <span>{vorgangeTable.quadratmeterpreisCol}</span>
          <span>{vorgangeTable.kaufpreisCol}</span>
        </div>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h4>{vertragsdaten.title}</h4>
        <p>{vertragsdaten.voreigentumerLabel}</p>
        <p>{vertragsdaten.auflassungLabel}</p>
        <p>{vertragsdaten.eintragungLabel}</p>
        <p>{vertragsdaten.bemerkung}</p>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <h4>{qkb.title}</h4>
        <h5 style={{ margin: "1rem 0" }}>{qkb.querverweiseTitle}</h5>
        <h5>{qkb.kostenTitle}</h5>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>{qkb.kostenartCol}</span>
          <span>{qkb.betragCol}</span>
          <span>{qkb.anweisungCol}</span>
        </div>
      </div>
    </div>
  );
};

export const VorgangePage: StoryObj = {
  render: () => {
    return <DisplayVorgange />;
  },
};
