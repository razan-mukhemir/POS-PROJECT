import React, { useState } from "react";
import { Container, InputBase } from "@material-ui/core";
import Buttons from "../buttons/Buttons";
import CategoryInputProps from "../../pages/categories/type";
import useStyles from "./headerStyle";

const Header: React.FC<{
  openAddPopup: any;
  data: CategoryInputProps[];
  setData: any;
  felterTerm: string;
  resetData: any;
}> = ({ openAddPopup, data, setData, felterTerm, resetData }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    const dataFields = data;
    setSearchTerm(searchWord);
    if (searchWord === "") {
      resetData();
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
