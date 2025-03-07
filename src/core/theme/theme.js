export const colors = {
  localBlack: "#000000",
  localWhite: "#FFFFFF",
  localLightGrey: "#eeeeee",
  localGreen: "#018578",
  localError: "#DC2626",
  primary: "#4F46E5",
  textPrimary: "#262C4D",
  inputDisabled: "#eceff1",
  defaultIcon: "#6C6C6C",
  buttonImport: "#fd7e14",
  buttonDraft: "#2B8A8A",
};

export const theme = {
  extend: {
    colors, //ใช้สำหรับ tailwind
    width: {
      "button-default": "150px", // กำหนดความกว้างปกติของปุ่ม
    },
  },
};
