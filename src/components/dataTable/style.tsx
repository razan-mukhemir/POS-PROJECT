import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
    width: "70%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
export default useStyles;
