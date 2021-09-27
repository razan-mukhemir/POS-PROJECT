import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  errors: {
    color: theme.palette.error.dark,
    fontSize: theme.typography.fontSize * 0.95,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(-1),
  },
}));
export default useStyles;
