// Alle Optionen für die Farbe der Sections
type Styling =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "default";

const getFilterHeader = (
  numberOfFeatures: number,
  numberOfShownFeatures: number
) => {
  let term;
  if (numberOfFeatures === 1) {
    term = "Angebot";
  } else {
    term = "Angebote";
  }

  return `Mein Kulturstadtplan (${numberOfFeatures} ${term} gefunden, davon ${
    numberOfShownFeatures
  } in der Karte)`;
};

export const FilterTitle = getFilterHeader(100, 10);
export const FilterStyle: Styling = "primary";

export const KompaktAnleitungTitle = "Kompaktanleitung";
export const KompaktAnleitungStyle: Styling = "default";
