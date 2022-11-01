import classNames from "classnames";
import { ChangeEventHandler } from "react";

interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  style?: string;
}

export const TextInput = ({
  placeholder,
  style,
  onChange,
  value,
}: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(
        "h-[44px] w-full bg-white border-none px-[18px] py-[14px] flex-1 leading-4 text-[14px] placeholder:text-lime focus:outline-none",
        style
      )}
      value={value}
      onChange={onChange}
    />
  );
};
