import React from "react";
import Box from "@material-ui/core/Box";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { DropdownProps } from "./type";

const DropDown = (props: DropdownProps) => {
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => {
    props.setDropdownValue(event.target.value);
  };
  return (
    <Box>
      <FormControl fullWidth variant="outlined" style={{ marginLeft: 0 }}>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={1}
          value={props.dropdownValue}
          name={props.menuName}
          label="data"
          onChange={handleChange}
        >
          {props.data.map((value: string, index: number) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
