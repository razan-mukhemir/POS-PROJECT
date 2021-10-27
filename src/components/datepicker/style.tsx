import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& input": {
      borderBottom: "1px solid rgba(0,0,0,0.2)",
      //border: "1px solid rgba(0,0,0,0.2)",
      padding: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));
export default useStyles;
