"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

export default function QR_() {
  const [text, setText] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = () => {
    setShowQR(true);
  };

  return (
    <div className="flex justify-center">
      <div className="mt-64 flex flex-col items-center gap-10">
        {showQR && (
          <div className="p-4 border-2 bg-white border-accent rounded-lg shadow-md">
            <QRCodeCanvas value={text} size={200} />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="qr-input" className="text-sm font-medium">
            Enter text for QR code
          </label>
          <input
            id="qr-input"
            type="text"
            placeholder="Input your text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setShowQR(false);
            }}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={!text.trim()}
          className="p-2 border-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate QR Code
        </button>
      </div>
    </div>
  );
}