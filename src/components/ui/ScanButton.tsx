import type { HTMLAttributes } from "react";

interface ScanQRButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const ScanQRButton = ({
  text = "Scan QR",
  ...props
}: ScanQRButtonProps) => {
  return (
    <button
      className="button-text p-2 border-2 rounded-lg disabled:opacity-50 
      disabled:cursor-not-allowed border-[var(--border-color)] bg-transparent"
    {...props}
    >
      {text}
    </button>
  );
};
