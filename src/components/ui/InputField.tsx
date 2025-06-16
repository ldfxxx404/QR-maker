import type { InputHTMLAttributes, ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function Input({
  placeholder,
  maxLength,
  value,
  disabled,
  onChange,
  ...props
}: InputProps) {
  return (
    <input
      className="p-2 border-2 rounded-lg border-[#1E2126] placeholder-[#1E2126] text-[#1E2126]"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      {...props}
    />
  );
}
