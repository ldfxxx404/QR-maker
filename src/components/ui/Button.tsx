import type { HtmlHTMLAttributes } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export default function Button({
  onClick,
  text = "Generate",
  ...props
}: ButtonProps) {
  return (
    <button
      className="p-2 border-[#1E2126] border-2 text-[#1E2126] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={alert}
      {...props}
    >
      {text}
    </button>
  );
}
