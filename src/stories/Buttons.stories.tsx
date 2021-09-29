import CloseIcon from "@material-ui/icons/Close";
import Buttons from "../components/buttons/Buttons";

export default {
  title: "controls/Buttons",
  component: Buttons,
};

export const AddCategory = () => (
  <Buttons color="primary" variant="contained">
    Add Category
  </Buttons>
);
export const Delete = () => (
  <Buttons color="secondary" variant="contained">
    delete
  </Buttons>
);
export const Edit = () => <Buttons variant="contained">edit</Buttons>;
export const CloseForm = () => (
  <Buttons color="secondary">
    <CloseIcon />
  </Buttons>
);
export const Yes = () => (
  <Buttons color="secondary" variant="contained">
    Yes
  </Buttons>
);
export const No = () => <Buttons variant="contained">No</Buttons>;
export const Submit = () => (
  <Buttons variant="contained" color="primary" type="submit">
    Submit
  </Buttons>
);
export const Reset = () => (
  <Buttons variant="contained" color="secondary">
    Reset
  </Buttons>
);
