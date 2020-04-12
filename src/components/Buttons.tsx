import React from "react";
import { Button } from "antd";

export interface IButtonProps {
  type?: any;
  icon?: any;
  size?: any;
  buttonText?: string;
  onClick?: any;
}

const Buttons = (props: IButtonProps) => {
  const { type, icon, size, buttonText, onClick } = props;

  return (
    <div>
      <Button type={type} icon={icon} size={size} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default Buttons;
