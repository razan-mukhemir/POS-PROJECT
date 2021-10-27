export interface HeaderProps<T> {
  children: React.ReactNode;
  openAddPopup: any;
  data: T[];
  setData: (data: T[]) => void;
  felterTerm: string;
  resetData: () => void;
}
