import EMobiModal from "../EMobiModal";

export const additionalInfoFactory = (id: string) => {
  switch (id) {
    case "emob":
      return EMobiModal;
    default:
      return null;
  }
};
