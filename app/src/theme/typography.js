const fonts = {
  default: "sans-serif",
  heading: "sans-serif",
  monospace: "monospace, monospace",
};

const sizes = {
  xxlarge: 2.125,
  xlarge: 1.875,
  large: 1.625,
  medium: 1,
  small: 0.875,
  get default() {
    return this.small;
  },
};

const weights = {
  normal: 400,
  bold: 700,
};

const widths = {
  condensed: 0,
  normal: 100,
};

const lineHeights = {
  default: 1.4,
};

export default {
  fonts,
  sizes,
  weights,
  widths,
  lineHeights,
};
