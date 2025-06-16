import type { HtmlHTMLAttributes, MouseEvent } from "react";
interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onShowAlert?: () => void;
  disabled?: boolean;
}

export default function Button({
  onClick,
  text = "Generate",
  onShowAlert,
  ...props
}: ButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onShowAlert?.();
  };
  return (
    <button
      className="p-2 border-[#1E2126] border-2 text-[#1E2126] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
}
