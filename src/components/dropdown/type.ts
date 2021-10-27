export interface DropdownProps {
  label: string;
  menuName: string;
  data: string[];
  dropdownValue: string;
  setDropdownValue: (data: string) => void;
}
