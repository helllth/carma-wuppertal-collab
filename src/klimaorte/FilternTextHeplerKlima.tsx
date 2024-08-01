import Icon from "react-cismap/commons/Icon";

export const FilternTextHeplerKlima = () => {
  return (
    <div>
      <p>
        Im Bereich &quot;<strong>Meine Klimaorte</strong>&quot; können Sie im
        Anwendungsmenü <Icon name="bars" /> die in der Karte angezeigten
        Klimaorte so ausdünnen, dass nur die für Sie interessanten Orte übrig
        bleiben. Dabei umfasst die Filterung die Angebote an den
        Klimastandorten, wobei sich ein Angebot aus einem Thema und einer
        Kategorie ergibt. Standardmäßig sind die Einstellungen hier so gesetzt,
        dass alle verfügbaren Klimaorte angezeigt werden.
      </p>
      <p>
        Ihnen stehen somit zwei Filterkriterien zur Verfügung: "Themen" und
        "Kategorien". Innerhalb dieser Kriterien können sie in einer
        alphabetisch sortieren Menge an Schlagworten (Tags) bestimmte Begriffe
        per Mausklick selektieren bzw. deselektieren; die Auswahl aller bzw.
        keines der Schlagworte erfolgt über die Schaltfläche{" "}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="renderAsLink">alle</a> bzw.{" "}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="renderAsLink">keine</a>.
      </p>
      <p>
        Ihre Einstellungen werden direkt in der blauen Titelzeile des Bereichs "
        <strong>Meine Klimaorte</strong>" und in dem Donut-Diagramm, das Sie
        rechts neben oder unter den Filteroptionen finden, ausgewertet. Die
        Titelzeile zeigt die Gesamtanzahl der Klimaorte, die den von Ihnen
        gesetzten Filterbedingungen entsprechen. Das Donut-Diagramm zeigt
        zusätzlich die Verteilung der Klimaorte entsprechend der Filterkriterien
        "Themen" oder "Kategorien". Bewegen Sie dazu den Mauszeiger auf eines
        der farbigen Segmente des Diagramms. Die Farben des Donut-Diagramms
        entsprechen den farbigen Hintergründen der Schlagworte aus dem
        Filterkriterium "Themen".
      </p>
    </div>
  );
};
