const colors = {
  localBlack: "#000000",
  localWhite: "#FFFFFF",
  localLightGrey: "#eeeeee",
  localLightGreen: "#2B8A8A",
  localGreen: "#018578",
  localError: "#DC2626",
  primary: "#4F46E5",
  textPrimary: "#262C4D",
  inputDisabled: "#eceff1",
};

export const theme = {
  extend: {
    colors, //ใช้สำหรับ tailwind
    width: {
      "button-default": "150px", // กำหนดความกว้างปกติของปุ่ม
    },
  },
};
