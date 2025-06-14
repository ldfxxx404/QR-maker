import React from "react";

interface ButtonProps {
  text: string;
  onGenerate: () => void;
}

function GenerateQRButton({ text, onGenerate }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onGenerate}
      disabled={!text.trim()}
      className="p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Generate QR Code
    </button>
  );
}

export default GenerateQRButton;
