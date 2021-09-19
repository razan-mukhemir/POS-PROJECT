import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `linear-gradient(to top, #30cfd0 0%, #330867 100%)`,
    "& .MuiContainer-root": {
      backgroundColor: "#f1f2f4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 0 40px 0",
      borderRadius: "30px",
    },
    "& h2": {
      marginBottom: "50px",
      textAlign: "center",
      fontSize: 35,
      color: "#031054",
      "&::after": {
        content: '"-"',
        display: "block",
        height: "20px",
        marginTop: "-20px",
        color: "#02db8c",
      },
    },
  },
  textFieldRoot: {
    marginBottom: "25px",
    width: "90%",
    marginLeft: "5%",
    "& input": {
      height: "30px",
      backgroundColor: "transparent !important",
    },
    "& .MuiInputLabel-root": {
      color: "#031054",
      fontSize: "20px",
      fontWeight: "bold",
    },
  },
  input: {
    "input:focus": {
      backgroundColor: "red",
    },
  },
  errors: {
    color: "red",
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "0",
  },
  loginBtn: {
    height: "50px",
    width: "50%",
    marginLeft: "25%",
    textTransform: "uppercase",
    backgroundImage:
      "linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%)",
    color: "white",
    backgroundSize: "200% auto",
    transition: "0.5s",
    "&:hover": {
      backgroundPosition: "right center",
    },
  },
}));
export default useStyles;
