import { AlertProps } from "@material-ui/lab";
import { SnackbarOrigin } from "@material-ui/core";
export interface NotifyProps {
  isOpen: boolean;
  message: string;
  type: AlertProps["severity"];
}

export interface SnackbarOriginProps {
  vertical: SnackbarOrigin["vertical"];
  horizontal: SnackbarOrigin["horizontal"];
}
