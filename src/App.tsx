import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import useQRGenerator from "./components/hooks/useQRGenerator";
import { useQRDownload } from "./components/hooks/useQRDownload";
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
  const { qrRef, downloadQR } = useQRDownload();
  
  return (
    <>
      <div className="flex justify-center mt-40" ref={qrRef}>
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
        <DownloadButton onClick={downloadQR}/>
      </div>
    </>
  );
}

export default App;
