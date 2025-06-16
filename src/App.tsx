import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import Button from "./components/ui/Button";
import Input from "./components/ui/InputField";
import useQRGenerator from "./components/hooks/useQRGenerator";

function App() {
  const {
    inputValue,
    handleInputChange,
    handleKeyDown,
    generateQR,
    qrCodeProps,
    isGenerateDisabled,
  } = useQRGenerator();
  return (
    <>
      <div className="flex justify-center mt-40">
        <QRCodeCanvas {...qrCodeProps} />
      </div>
      <div className="mt-10">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Input text to QR"
          maxLength={512}
        />
      </div>
      <div className="mt-7">
        <Button onClick={generateQR} disabled={isGenerateDisabled} />
      </div>
    </>
  );
}

export default App;
