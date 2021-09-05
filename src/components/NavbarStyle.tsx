import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  MuiTypographyRoot: {
    flexGrow: 1,
    cursor: "pointer",
  },
  linksRoot: {
    display: "flex",
    marginLeft: theme.spacing(1),
  },
  links: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.fontSize * 1.5,
    marginLeft: theme.spacing(2.5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
export default useStyles;
