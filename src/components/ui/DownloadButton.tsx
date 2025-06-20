import type { HTMLAttributes } from "react";

interface DownloadButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const DownloadQRButton = ({
  text = "Download",
  ...props
}: DownloadButtonProps) => {
  return (
    <button
      className="p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed 
             text-[var(--text-color)] border-[var(--border-color)] bg-transparent"
      {...props}
    >
      {text}
    </button>
  );
};
