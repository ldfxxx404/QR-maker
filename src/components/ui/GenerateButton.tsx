import type { HTMLAttributes, MouseEvent } from "react";

interface GenerateButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  onShowAlert?: () => void;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const GenerateQRButton = ({
  onClick,
  text = "Generate",
  onShowAlert,
  ...props
}: GenerateButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onShowAlert?.();
  };
  return (
    <button
      className="button-text p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed \
             border-[var(--border-color)] bg-transparent"
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  );
};
