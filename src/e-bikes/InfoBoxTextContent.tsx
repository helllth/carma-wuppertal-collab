import Icon from "react-cismap/commons/Icon";

const defaultText = (
  <span>
    Für mehr Ladestationen Ansicht mit <Icon name="minus-square" /> verkleinern
    oder mit dem untenstehenden Link auf das komplette Stadtgebiet zoomen.
  </span>
);

export const InfoBoxTextContent = ({ text = defaultText }) => {
  return text;
};
