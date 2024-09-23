export const getCollabedHelpComponentConfig = (keyId, elements) => {
  for (const k in elements) {
    if (elements[k].key === keyId) {
      const settings = {
        primary: {
          ...elements[k],
        },
        ...(elements[k].secondary !== undefined && {
          secondary: elements[k].secondary,
        }),
      };
      return settings;
    }
  }
  return undefined;
};
