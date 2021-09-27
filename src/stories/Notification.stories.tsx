import Notification from "../components/notification/Notification";

export default {
  title: "dialogs/Notification",
  component: Notification,
};
export const deleteNotify = () => (
  <Notification
    notify={{ isOpen: true, message: "Deleted Successfully", type: "error" }}
    setNotify={() => {}}
  />
);
export const editNotify = () => (
  <Notification
    notify={{ isOpen: true, message: "Updated Successfully", type: "success" }}
    setNotify={() => {}}
  />
);
export const addNotify = () => (
  <Notification
    notify={{ isOpen: true, message: "Added Successfully", type: "success" }}
    setNotify={() => {}}
  />
);
