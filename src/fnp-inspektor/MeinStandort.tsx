import GenericHelpTextForMyLocation from "react-cismap/topicmaps/docBlocks/GenericHelpTextForMyLocation";
import Section from "react-cismap/topicmaps/menu/Section";

export const MeinStandort = () => {
  return (
    <Section
      sectionKey="standort"
      sectionTitle="Mein Standort"
      sectionBsStyle="warning"
      sectionContent={
        <>
          <GenericHelpTextForMyLocation />
        </>
      }
    />
  );
};
