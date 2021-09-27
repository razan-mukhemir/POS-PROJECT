export interface NotifyProps {
  isOpen: boolean;
  message: string;
  type: any;
}

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  subTitle: string;
  onConfirm: any;
}

export interface PopupProps {
  isOpen: boolean;
  title: string;
  inputField?: any;
  onSubmit: any;
}

export interface ButtonProps {
  type?: any;
  color?: any;
  variant?: any;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: any;
  classStyle?: string;
}
