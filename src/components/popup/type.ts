export interface PopupProps<T> {
  isOpen: boolean;
  title: string;
  inputField?: T;
  onSubmit: (value: T) => void;
}

export interface OpenViewPopupProps {
  isOpen: boolean;
  title: string;
  inputField: any;
  onSubmit: () => void;
}
