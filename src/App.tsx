import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import useQRGenerator from "./components/hooks/useQRGenerator";
import Input from "./components/ui/InputField";
import GenerateButton from "./components/ui/Button";
import DownloadButton from "./components/ui/DownloadButton";

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
      <div className="mt-4">
        <GenerateButton onClick={generateQR} disabled={isGenerateDisabled} />
      </div>
      <div className="mt-4">
        <DownloadButton />
      </div>
    </>
  );
}

export default App;
