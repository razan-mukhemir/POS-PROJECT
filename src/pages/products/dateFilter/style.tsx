import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  dateContainer: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  dateTitle: {
    fontWeight: "bold",
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  },
  dateLabel: {
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  },
  applyFilterBtn: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));
export default useStyles;
