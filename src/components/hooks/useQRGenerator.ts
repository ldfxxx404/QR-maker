import { useState, type ChangeEvent, type KeyboardEvent } from "react";

export default function useQRGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("https://github.com/ldfxxx404");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const generateQR = () => {
    if (inputValue.trim()) {
      setQrValue(inputValue);
      setInputValue("");
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      generateQR();
    }
  };

  const qrCodeProps = {
    value: qrValue,
    size: 255,
    className: "p-3 bg-white rounded-2xl border-4",
  };
  return {
    inputValue,
    qrValue,
    handleInputChange,
    handleKeyDown,
    generateQR,
    qrCodeProps,
    isGenerateDisabled: !inputValue.trim() || inputValue === qrValue,
  };
}
