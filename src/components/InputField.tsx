import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  placeholder,
  maxLength,
  ...props
}: InputProps) {
    return(
        <input className="p-2 border-2 rounded-lg border-[#1E2126] placeholder-[#1E2126] text-[#1E2126]" placeholder={placeholder} maxLength={maxLength} {...props} />
    );
}
