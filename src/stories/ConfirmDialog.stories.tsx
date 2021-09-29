import ConfirmDialog from "../components/confirmDialog/ConfirmDialog";

export default {
  title: "dialogs/ConfirmDialog",
  component: ConfirmDialog,
};

export const confirmDeleteDialog = () => (
  <ConfirmDialog
    confirmDialog={{
      isOpen: true,
      title: "Are you sure to delete this record?",
      subTitle: "You can't undo this operation",
      onConfirm: () => {},
    }}
    setConfirmDialog={() => {}}
  />
);
