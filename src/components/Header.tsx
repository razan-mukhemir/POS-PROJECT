import React, { useState } from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { Container, InputBase } from "@material-ui/core";
import Buttons from "./Buttons";
import CategoryInputProps from "../pages/categories/type";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(5, 0, 5, 0),
    justifyContent: "space-around",
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Header: React.FC<{
  openAddPopup: any;
  data: CategoryInputProps[];
  setData: any;
  felterTerm: string;
}> = ({ openAddPopup, data, setData, felterTerm }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    const dataFields = data;
    setSearchTerm(searchWord);
    if (searchWord === "") {
      setData(data);
    } else {
      const newFilter = dataFields.filter((value: any) => {
        return value[felterTerm]
          .toLowerCase()
          .includes(searchWord.toLowerCase());
      });
      setData(newFilter);
    }
  };
  return (
    <>
      <Container component="div" maxWidth="lg" className={classes.root}>
        <Buttons color="primary" variant="contained" onClick={openAddPopup}>
          Add Category
        </Buttons>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            value={searchTerm}
            onChange={searchInputHandler}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Container>
    </>
  );
};

export default Header;
