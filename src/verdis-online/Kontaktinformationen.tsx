type KontaktinformationenProps = {
  textColor?: string;
};
export const Kontaktinformationen = ({
  textColor = "white",
}: KontaktinformationenProps) => {
  return (
    <>
      <h4 style={{ color: textColor }}>Stadt Wuppertal</h4>
      <h4 style={{ color: textColor }}>Vermessung, Katasteramt und Geodaten</h4>
      <h4 style={{ color: textColor }}>
        102.23 Kommunalservice Liegenschaftskataster
      </h4>
      <h4 style={{ color: textColor }}>
        <a
          style={{ color: textColor }}
          href="mailto:regengeld@stadt.wuppertal.de"
        >
          regengeld@stadt.wuppertal.de
        </a>
      </h4>
    </>
  );
};
