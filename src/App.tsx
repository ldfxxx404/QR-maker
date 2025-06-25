import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import { useQRGenerator } from "./components/hooks/useQRGenerator";
import { useQRDownload } from "./components/hooks/useQRDownload";
import { useTheme } from "./components/hooks/useSwitcher";
import { useQRScan } from "./components/hooks/useQRScan"; // Импортируйте useQRScan
import { Switcher } from "./components/ui/ThemeSwitcher";
import { Input } from "./components/ui/InputField";
import { GenerateQRButton } from "./components/ui/GenerateButton";
import { DownloadQRButton } from "./components/ui/DownloadButton";
import { ScanQRButton } from "./components/ui/ScanButton";

function App() {
  const {
    inputValue,
    handleInputChange,
    handleKeyDown,
    generateQR,
    qrCodeProps,
    qrValue,
    isGenerateDisabled,
  } = useQRGenerator();
  const { qrRef, downloadQR } = useQRDownload(qrValue);
  const { theme, toggleTheme } = useTheme();
  const { result, error, inputRef, onFileChange, triggerFileInput } =
    useQRScan();

  return (
    <>
      <div className="flex justify-center items-center">
        <Switcher onToggle={toggleTheme} isDark={theme === "dark"} />
      </div>
      <div className="flex justify-center mt-40" ref={qrRef}>
        <QRCodeCanvas {...qrCodeProps} />
      </div>
      <div className="mt-10 text-[var(--text-color)] border-[var(--border-color)]">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Input text to QR"
          maxLength={512}
        />
      </div>
      <div className="mt-4">
        <GenerateQRButton onClick={generateQR} disabled={isGenerateDisabled} />
      </div>
      <div className="mt-4">
        <DownloadQRButton onClick={downloadQR} />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onFileChange}
        style={{ display: "none" }}
      />
      <div className="mt-4">
        <ScanQRButton onClick={triggerFileInput} />
      </div>
      {result && (
        <div className="mt-2 text-green-600 break-all">
          Scan result: {result}
        </div>
      )}
      {error && <div className="mt-2 text-red-600">Scan error: {error}</div>}
    </>
  );
}

export default App;
