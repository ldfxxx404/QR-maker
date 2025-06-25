import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export function useQRScan() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scanFromFile = async (file: File) => {
    setError(null);
    setResult(null);
    const tempDiv = document.createElement("div");
    tempDiv.id = "qr-reader-temp";
    tempDiv.style.display = "none";
    document.body.appendChild(tempDiv);
    try {
      const html5QrCode = new Html5Qrcode("qr-reader-temp");
      const decoded = await html5QrCode.scanFile(file, true);
      setResult(decoded);
      await html5QrCode.clear();
    } catch (err: any) {
      setError(err?.message || "Scan failed");
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      scanFromFile(file);
    }
  };

  const triggerFileInput = () => {
    inputRef.current?.click();
  };

  return {
    result,
    error,
    inputRef,
    onFileChange,
    triggerFileInput,
  };
}
