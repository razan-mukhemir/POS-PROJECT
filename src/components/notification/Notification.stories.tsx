import { ReactNode } from "react";
import Notification from "./Notification";
import { Story, Meta } from "@storybook/react";
import { NotifyProps, SnackbarOriginProps } from "./type";

export default {
  title: "dialogs/Notification",
  component: Notification,
  args: {
    notify: {
      isOpen: true,
      message: "Deleted Successfully",
      type: "error",
    },
    setNotify: () => {},
    snackbarOrigins: { vertical: "bottom", horizontal: "right" },
  },
} as Meta;

const Template: Story<
  JSX.IntrinsicAttributes & {
    notify: NotifyProps;
    setNotify: (value: NotifyProps) => void;
    snackbarOrigins: SnackbarOriginProps;
  } & { children?: ReactNode }
> = (args) => <Notification {...args} />;

export const notification = Template.bind({});

notification.args = {
  notify: {
    isOpen: true,
    message: "Deleted Successfully",
    type: "error",
  },
  setNotify: () => {},
  snackbarOrigins: { vertical: "bottom", horizontal: "right" },
};
