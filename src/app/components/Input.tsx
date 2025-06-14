import { KeyboardEvent } from "react";

interface InputProps {
  text: string;
  setText: (value: string) => void;
  onGenerate: () => void;
  placeholder?: string;
}

function InputField({ text, setText, onGenerate, placeholder }: InputProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && text.trim()) {
      onGenerate();
    }
  };

  return (
    <input
      id="qr-input"
      type="text"
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default InputField;
