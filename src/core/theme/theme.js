export const colors = {
  primary: "#4F46E5",

  localBlack: "#000000",
  localWhite: "#FFFFFF",
  localLightGrey: "#eeeeee",
  localGreen: "#018578",

  localError: "#DC2626",
  localSuccess: "#34D399",
  localDraft: "#2B8A8A",

  textPrimary: "#262C4D",
  inputDisabled: "#eceff1",
  defaultIcon: "#6C6C6C",
  cardEvaluation: "#26405D",
  buttonImport: "#fd7e14",
  buttonExport: "#3B82F6",
};

export const theme = {
  extend: {
    colors, //ใช้สำหรับ tailwind
    width: {
      "button-default": "150px", // กำหนดความกว้างปกติของปุ่ม
    },
  },
};
