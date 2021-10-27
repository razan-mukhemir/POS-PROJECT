import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Hidden,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import NavbarList from "./NavbarList";
import useStyles from "./style";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const isMenuOpen: boolean = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setAnchorEl(button);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "responsive-menu-id";
  const classes = useStyles();
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        classes={{ root: classes.appBarRootClasses }}
      >
        <Toolbar>
          <Typography variant="h5" classes={{ root: classes.appBarBrand }}>
            <span>FBI</span> POS
          </Typography>
          <Container maxWidth="xl">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Hidden mdDown implementation="js">
                <NavbarList />
              </Hidden>
              <Hidden lgUp implementation="js">
                <IconButton
                  edge="end"
                  onClick={handleMenuOpen}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  classes={{ root: classes.appBarMenuIcon }}
                >
                  <Box
                    component={MenuIcon}
                    width="2rem!important"
                    height="2rem!important"
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  id={menuId}
                  keepMounted
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  classes={{ paper: classes.MuiMenuPaper }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingLeft="1.25rem"
                    paddingRight="1.25rem"
                    paddingBottom="1.5rem"
                  >
                    <IconButton
                      edge="end"
                      onClick={handleMenuClose}
                      aria-controls={menuId}
                      aria-haspopup="true"
                      classes={{ root: classes.appBarClearIcon }}
                    >
                      <Box
                        component={ClearIcon}
                        width="2rem!important"
                        height="2rem!important"
                      />
                    </IconButton>
                  </Box>
                  <Box
                    component={Divider}
                    marginBottom="1rem!important"
                    marginLeft="1.25rem!important"
                    marginRight="1.25rem!important"
                  />
                  <NavbarList />
                </Menu>
              </Hidden>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
