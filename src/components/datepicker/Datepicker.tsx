import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DatePikerProps } from "./type";
import useStyles from "./style";

const Datepicker = (props: DatePikerProps) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label={props.label}
        value={props.datePickerValue}
        name={props.name}
        format={"dd/MM/yyyy"}
        onChange={props.setDatePickerValue}
        animateYearScrolling
        variant="inline"
        className={classes.root}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Datepicker;
