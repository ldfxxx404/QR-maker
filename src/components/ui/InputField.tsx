import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
  placeholder,
  maxLength,
  value,
  disabled,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      className="p-2 border-2 rounded-lg border-[#1E2126] placeholder-[#1E2126] text-[#1E2126] dark:border-azure dark:placeholder-[#deddda] dark:text-[#deddda] dark:bg-transparent"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
    />
  );
}
