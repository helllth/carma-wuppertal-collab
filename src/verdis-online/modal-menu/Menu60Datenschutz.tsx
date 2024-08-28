import Section from "react-cismap/topicmaps/menu/Section";

export const Menu60Datenschutz = () => {
  return (
    <Section
      key="datenschutz"
      sectionKey="datenschutz"
      sectionTitle="Datenschutz"
      sectionBsStyle="danger"
      sectionContent={
        <div>
          <p>
            Die Informationen zum Datenschutz finden Sie in diesem{" "}
            <a href="/docs/102.23.-.Regengeld.pdf" target="_more">
              Dokument
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
