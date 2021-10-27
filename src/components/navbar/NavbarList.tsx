import React, { useContext } from "react";
import { List, ListItem, Hidden } from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Shop";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { UsernameContext } from "../../pages/login/Login";
const NavbarList: React.FC = () => {
  const classes = useStyles();
  const username = useContext(UsernameContext);
  return (
    <>
      <List classes={{ root: classes.appBarList }}>
        <ListItem>
          <Link to="/" className={classes.links}>
            <HomeIcon className={classes.appBarListItemIcon} />
            POS
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/products" className={classes.links}>
            <ShopIcon className={classes.appBarListItemIcon} />
            Product
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/" className={classes.links}>
            <PeopleAltIcon className={classes.appBarListItemIcon} />
            People
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/" className={classes.links}>
            <HomeIcon className={classes.appBarListItemIcon} />
            Sales
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/expenses" className={classes.links}>
            <AttachMoneyIcon className={classes.appBarListItemIcon} />
            Expense
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/categories" className={classes.links}>
            <CategoryIcon className={classes.appBarListItemIcon} />
            Categories
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/" className={classes.links}>
            <SettingsIcon className={classes.appBarListItemIcon} />
            Setting
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/" className={classes.links}>
            <BarChartIcon className={classes.appBarListItemIcon} />
            Reports
          </Link>
        </ListItem>
      </List>
      <Hidden>
        <List classes={{ root: classes.appBarList }}>
          <ListItem className={classes.links}>
            <AccountBoxIcon className={classes.appBarListItemIcon} />
            {username}
          </ListItem>
        </List>
      </Hidden>
    </>
  );
};
export default NavbarList;
