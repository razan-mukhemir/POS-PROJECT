import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonProps } from "./type";

const Buttons: React.FC<ButtonProps> = ({
  type,
  color,
  variant,
  children,
  onClick,
  size,
  classStyle,
  ...props
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      size={size}
      className={classStyle}
      {...props}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Buttons;
