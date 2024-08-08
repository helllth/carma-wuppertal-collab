import type { Meta, StoryObj } from "@storybook/react";
import { menuNamesHelper, drawerTextsHelper } from ".";

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
