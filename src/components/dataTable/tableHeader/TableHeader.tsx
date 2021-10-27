import React, { useState } from "react";
import { Container, InputBase } from "@material-ui/core";
import { HeaderProps } from "./type";
import useStyles from "./style";

const TableHeader = <T extends object>(
  props: HeaderProps<T> & { children?: React.ReactNode }
) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = event.target.value;
    const dataFields = props.data;
    setSearchTerm(searchInput);
    if (props.felterTerm === "global") {
      if (searchInput === "") {
        props.resetData();
      } else {
        const filteredData = dataFields.filter((value: any) => {
          return (
            value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            value.categoryName
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            value.description
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            value.code.toLowerCase().includes(searchInput.toLowerCase()) ||
            value.rawPrice
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            value.price
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          );
        });
        props.setData(filteredData);
      }
    } else {
      if (searchInput === "") {
        props.resetData();
      } else {
        const filteredData = dataFields.filter((value: any) => {
          return value[props.felterTerm]
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        props.setData(filteredData);
      }
    }
  };
  return (
    <>
      <Container component="div" maxWidth="lg" className={classes.root}>
        {props.children}
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

export default TableHeader;
