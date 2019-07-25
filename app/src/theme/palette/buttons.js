import colors from "../colors";

import statuses from "./statuses";
import typography from "./typography";

export default {
  primaryButton: colors.primary,
  primaryButtonHover: colors.primaryHover,
  primaryButtonFocus: colors.primaryFocus,
  primaryButtonTextColor: typography.textColor,

  secondaryButton: colors.secondary,
  secondaryButtonHover: colors.secondaryHover,
  secondaryButtonFocus: colors.secondaryFocus,
  secondaryButtonTextColor: colors.white,

  tertiaryButton: colors.tertiary,
  tertiaryButtonHover: colors.tertiaryHover,
  tertiaryButtonFocus: colors.tertiaryFocus,
  tertiaryButtonTextColor: colors.shade20,

  successButton: statuses.success,
  successButtonHover: statuses.successLight,
  successButtonFocus: statuses.successDark,
  successButtonTextColor: colors.white,

  dangerButton: statuses.danger,
  dangerButtonHover: statuses.dangerLight,
  dangerButtonFocus: statuses.dangerDark,
  dangerButtonTextColor: colors.white,

  clearButton: "transparent",
  clearButtonHover: colors.shade70,
  clearButtonFocus: colors.shade60,
  clearButtonTextColor: typography.textColor,

  iconOnlyButton: "transparent",
  iconOnlyButtonHover: colors.shade60,
  iconOnlyButtonFocus: colors.shade50,
  iconOnlyButtonTextColor: typography.textColor,

  disabledButton: colors.shade70,
  disabledButtonTextColor: colors.shade40,
};
