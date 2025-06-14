import React from "react";

interface ButtonProps {
  text: string;
  onGenerate: () => void;
  buttonText?: string;
}

function GenerateQRButton({ text, onGenerate, buttonText}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onGenerate}
      disabled={!text.trim()}
      className="p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {buttonText}
    </button>
  );
}

export default GenerateQRButton;
