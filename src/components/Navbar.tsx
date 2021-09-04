import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./NavbarStyle";
const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.root}>
          Navbar
        </Typography>
        <div className={classes.linksRoot}>
          <Link to="/Products">Products</Link>
          <Link to="/Categories">Categories</Link>
          <Link to="/Expenses">Expenses</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
