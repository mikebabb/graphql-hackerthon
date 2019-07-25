const colors = {
  white: "#ffffff",

  get black() {
    return this.shade10;
  },

  get primary() {
    return this.cyan;
  },
  get primaryHover() {
    return this.cyanLight;
  },
  get primaryFocus() {
    return this.cyanDark;
  },
  get primaryDisabled() {
    return this.shade60;
  },

  get secondary() {
    return this.magenta;
  },
  get secondaryHover() {
    return this.magentaLight;
  },
  get secondaryFocus() {
    return this.magentaDark;
  },
  get secondaryDisabled() {
    return this.shade50;
  },

  tertiary: "#eaedef",
  tertiaryHover: "#cfd4da",
  tertiaryFocus: "#d8dadc",
  tertiaryDisabled: "#ebeef2",

  shade10: "#121212",
  shade20: "#2b2e31",
  shade30: "#495057",
  shade40: "#6A727B",
  shade50: "#CFD4DA",
  shade60: "#EAEDEF",
  shade70: "#f7fafd",

  greenDark: "#0F7A49",
  green: "#108752",
  greenLight: "#70b797",
  greenLightest: "#CFE7DC",

  redDark: "#B01D18",
  red: "#C3201B",
  redLight: "#db7976",
  redLightest: "#F3D2D1",

  yellowDark: "#E5AE05",
  yellow: "#FFC108",
  yellowLight: "#ffda6a",
  yellowLightest: "#FFF3CD",

  orangeDark: "#E27E00",
  orange: "#FB8B02",
  orangeLight: "#fdba66",
  orangeLightest: "#FEE8CB",

  cyanDark: "#00A0CC",
  cyan: "#00B3E3",
  cyanLight: "#66d1ee",
  cyanLightest: "#CCF0F9",

  blueDark: "#0768b8",
  blue: "#0874cc",
  blueLight: "#6bace0",
  blueLightest: "#cee3f5",

  blueAltDark: "#025984",
  blueAlt: "#026393",
  blueAltLight: "#67a1be",
  blueAltLightest: "#CCE0E8",

  magentaDark: "#C21E63",
  magenta: "#D7206F",
  magentaLight: "#e779a9",
  magentaLightest: "#F7D2E2",

  tealDark: "#00756E",
  teal: "#00827A",
  tealLight: "#66b4af",
  tealLightest: "#CCE6E4",

  plumDark: "#91477A",
  plum: "#A14F87",
  plumLight: "#bd84ab",
  plumLightest: "#D9B9CF",

  purpleDark: "#190829",
  purple: "#220E2A",
  purpleLight: "#766C7F",
  purpleLightest: "#766C7F",

  violetDark: "#8C239E",
  violet: "#9C27B0",
  violetLight: "#c47dd0",
  violetLightest: "#EAD4EF",
};

export default colors;
