import type { HTMLAttributes, MouseEvent } from "react";

interface GenerateButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  onShowAlert?: () => void;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function GenerateButton({
  onClick,
  text = "Generate",
  onShowAlert,
  ...props
}: GenerateButtonProps) {
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
