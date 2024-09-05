export const getCollabedHelpComponentConfig = (keyId, elements) => {
  for (const k in elements) {
    if (elements[k].key === keyId) {
      return {
        primary: {
          ...elements[k],
        },
      };
    }
  }
  return undefined;
};
