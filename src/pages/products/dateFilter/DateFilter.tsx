import React, { useState } from "react";
import Datepicker from "../../../components/datepicker/Datepicker";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { DateFilterProps } from "./type";
import useStyles from "./style";

const DateFilter = <T extends object>(
  props: DateFilterProps<T> & { children?: React.ReactNode }
) => {
  const [fromDate, handleFromDateChange] = useState<MaterialUiPickersDate>(
    new Date()
  );
  const [toDate, handleToDateChange] = useState<MaterialUiPickersDate>(
    new Date()
  );

  const handleApplyFilter = () => {
    const dataFields = props.data;
    const filteredData = dataFields.filter((value: any) => {
      const d = new Date(value.expirationDate);
      return (
        (d.getFullYear() <= fromDate.getFullYear() ||
          d.getFullYear() >= toDate.getFullYear()) &&
        (d.getMonth() + 1 <= fromDate.getMonth() + 1 ||
          d.getMonth() + 1 >= toDate.getMonth() + 1) &&
        (d.getDate() <= fromDate.getDate() || d.getDate() >= toDate.getDate())
      );
    });
    props.setData(filteredData);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h5" className={classes.dateTitle}>
        Expiration Date
      </Typography>
      <div className={classes.dateContainer}>
        <Typography component="h5" className={classes.dateLabel}>
          From:
        </Typography>
        <Datepicker
          label=""
          name="fromExpirationDate"
          datePickerValue={fromDate}
          setDatePickerValue={handleFromDateChange}
        />
      </div>
      <div className={classes.dateContainer}>
        <Typography component="h5" className={classes.dateLabel}>
          To:
        </Typography>
        <Datepicker
          label=""
          name="toExpirationDate"
          datePickerValue={toDate}
          setDatePickerValue={handleToDateChange}
        />
      </div>
      <Button
        onClick={handleApplyFilter}
        variant="contained"
        className={classes.applyFilterBtn}
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default DateFilter;
