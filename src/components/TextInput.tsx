import React from "react";
import { Input } from "antd";

export interface ITextInputProps {
  placeholder?: string;
  size?: any;
  value?: string;
  onChange?: any;
}

const TextInput = (props: ITextInputProps) => {
  const { placeholder, size, value, onChange } = props;

  return (
    <Input
      placeholder={placeholder}
      size={size}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
