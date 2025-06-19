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
      className="p-2 border-[#1E2126] border-2 text-[#1E2126] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {text}
    </button>
  );
}
