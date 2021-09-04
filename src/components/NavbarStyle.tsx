import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiTypography-root": {
      flexGrow: 1,
      cursor: "pointer",
    },
  },
  linksRoot: {
    display: "flex",
    marginLeft: "10px",
    "& a": {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: "20px",
    },
    "& a:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
export default useStyles;
