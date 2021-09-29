import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
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
