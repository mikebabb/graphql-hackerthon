import colors from "../colors";

import statuses from "./statuses";
import typography from "./typography";
import buttons from "./buttons";
import forms from "./forms";
import gradients from "./gradients";
import skeletons from "./skeletons";

const palette = {
  ...statuses,
  ...typography,
  ...buttons,
  ...forms,
  ...gradients,
  ...skeletons,

  // page
  background: colors.white,
  backgroundLight: colors.shade70,
  backgroundDark: colors.shade70,

  navBackground: colors.white,
  navItemBackground: colors.shade70,
  navItemBackgroundHover: colors.shade60,

  // misc
  borderColor: colors.shade60,
  borderColorInverted: colors.shade30,

  contentTabHighlightColor: typography.linkColor,

  progressAmount: colors.green,
  progressBackground: colors.white,

  // hero
  heroBackground: colors.shade70,
  heroBackgroundLight: colors.shade70,
  heroBackgroundDark: colors.tealDark,

  // footers
  footerBackground: colors.shade70,
  footerBackgroundDark: colors.shade70,
};

export { statuses, typography, buttons, forms, gradients, skeletons };
export default palette;
