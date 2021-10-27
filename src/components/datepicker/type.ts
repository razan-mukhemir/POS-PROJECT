import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export interface DatePikerProps {
  label: string;
  name: string;
  datePickerValue: MaterialUiPickersDate;
  setDatePickerValue: (value: MaterialUiPickersDate) => void;
}
