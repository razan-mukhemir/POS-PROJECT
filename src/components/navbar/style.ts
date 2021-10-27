import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appBarRootClasses: {
    backgroundColor: theme.palette.grey[200],
  },
  appBarBrand: {
    width: "10%",
    color: theme.palette.secondary.dark,
    "& span": {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(0.7),
      borderRadius: theme.shape.borderRadius * 2,
      fontSize: theme.typography.fontSize * 2.2,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  appBarList: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  links: {
    display: "flex",
    textDecoration: "none",
    color: theme.palette.grey[700],
    fontSize: theme.typography.fontSize * 1.2,
    marginLeft: theme.spacing(0),
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
  appBarListItemIcon: {
    width: "1.25rem",
    height: "1.25rem",
  },
  appBarMenuIcon: {
    color: theme.palette.grey[900],
    position: "absolute",
    right: "20px",
  },
  appBarClearIcon: {
    position: "absolute",
    right: "20px",
  },
  MuiMenuPaper: {
    width: "100%",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(2),
  },
}));
export default useStyles;
