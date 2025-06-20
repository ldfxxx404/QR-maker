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
      className="p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed 
             text-[var(--text-color)] border-[var(--border-color)] bg-transparent"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
    />
  );
};
