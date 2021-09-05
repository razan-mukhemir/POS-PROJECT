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
        <Typography variant="h4" classes={{ root: classes.MuiTypographyRoot }}>
          Navbar
        </Typography>
        <div className={classes.linksRoot}>
          <Link to="/Products" className={classes.links}>
            Products
          </Link>
          <Link to="/Categories" className={classes.links}>
            Categories
          </Link>
          <Link to="/Expenses" className={classes.links}>
            Expenses
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
