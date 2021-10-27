import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
  },
  divider: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  buttonMargin: {
    marginRight: theme.spacing(2),
  },
}));
export default useStyles;
