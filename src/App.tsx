import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import { useQRGenerator } from "./components/hooks/useQRGenerator";
import { useQRDownload } from "./components/hooks/useQRDownload";
import { ThemeSwitcher } from "./components/hooks/useSwitcher";
import { Switcher } from "./components/ui/ThemeSwitcher";
import { Input } from "./components/ui/InputField";
import { GenerateQRButton } from "./components/ui/GenerateButton";
import { DownloadQRButton } from "./components/ui/DownloadButton";

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

  const { theme, toggleTheme } = ThemeSwitcher();

  return (
    <>
      <div className="flex justify-center items-center">
        <Switcher onToggle={toggleTheme} isDark={theme === "dark"} />
      </div>
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
        <GenerateQRButton onClick={generateQR} disabled={isGenerateDisabled} />
      </div>
      <div className="mt-4">
        <DownloadQRButton onClick={downloadQR} />
      </div>
    </>
  );
}

export default App;
