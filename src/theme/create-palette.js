import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, indigo, info, navy, neutral, success, topback, warning } from "./colors";

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: common.white,
      navy: navy[800],
      backgradient: topback.grad,
    },
    divider: "#F2F4F7",
    error,
    info,
    mode: "light",
    neutral,
    primary: indigo,
    success,
    text: {
      logo:"#F2F4F7",
      toplink:"#F2F4F7",
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
