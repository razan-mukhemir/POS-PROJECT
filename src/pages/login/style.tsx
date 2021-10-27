import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(to top, #cc208e 0%, #6713d2 100%)`,
  },
  MuiContainerRoot: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 7,
  },
  MuiTypographyRoot: {
    marginBottom: theme.spacing(7),
    textAlign: "center",
    fontSize: theme.typography.fontSize * 2.5,
    color: theme.palette.primary.dark,
    "&::after": {
      content: '"-"',
      display: "block",
      height: "20px",
      marginTop: theme.spacing(-3),
      color: theme.palette.secondary.dark,
    },
  },
  textFieldRoot: {
    marginBottom: theme.spacing(3),
    width: "90%",
    marginLeft: "5%",
    "& input": {
      height: "30px",
      backgroundColor: "transparent !important",
    },
  },
  inputLabel: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.fontSize * 1.5,
    fontWeight: theme.typography.fontWeightBold,
  },
  loginBtn: {
    height: "50px",
    width: "50%",
    marginLeft: "25%",
    textTransform: "uppercase",
    backgroundImage: "linear-gradient(to right, #6713d2 0%, #cc208e 100%)",
    color: theme.palette.primary.contrastText,
    backgroundSize: "200% auto",
    transition: theme.transitions.easing.easeIn,
    transitionDuration: "0.3s",
    "&:hover": {
      backgroundPosition: "right center",
    },
  },
}));
export default useStyles;
