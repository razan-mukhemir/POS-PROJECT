import { ReactNode } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { ConfirmDialogProps } from "./type";
import { Story, Meta } from "@storybook/react";

export default {
  title: "dialogs/ConfirmDialog",
  component: ConfirmDialog,
  args: {
    confirmDialog: {
      isOpen: true,
      title: "Are you sure to delete this record??",
      subTitle: "You can't undo this operation",
      onConfirm: () => {},
    },
  },
} as Meta;

const Template: Story<
  JSX.IntrinsicAttributes & {
    confirmDialog: ConfirmDialogProps;
    setConfirmDialog: (value: ConfirmDialogProps) => void;
  } & { children?: ReactNode }
> = (args) => <ConfirmDialog {...args} />;

export const confirmDialog = Template.bind({});

confirmDialog.args = {
  confirmDialog: {
    isOpen: true,
    title: "Are you sure to delete this record?",
    subTitle: "You can't undo this operation",
    onConfirm: () => {},
  },
};
