interface LinkSecondaryComponentProps {
  children: JSX.Element;
  target: string;
  showSecondaryWithKey?: (key: string) => void;
}

export const LinkSecondaryComponent = ({
  children,
  target,
  showSecondaryWithKey = () => {},
}: LinkSecondaryComponentProps) => {
  const showSecondaryWithKeyHandler = (e) => {
    e.stopPropagation();
    showSecondaryWithKey(target);
  };
  return (
    <span onClick={showSecondaryWithKeyHandler} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
};
