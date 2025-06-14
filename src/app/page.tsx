"use client";

import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import GenerateQRButton from "./components/Button";
import Input from "@/app/components/Input";

export default function QR() {
  const [inputText, setInputText] = useState("");
  const [qrText, setQrText] = useState("");
  return (
    <div className="flex justify-center">
      <div className="mt-64 flex flex-col items-center gap-10">
        <div className="p-4 border-2 bg-white border-accent rounded-lg shadow-md">
          <QRCodeCanvas value={qrText} size={200} />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            text={inputText}
            setText={setInputText}
            onGenerate={() => setQrText(inputText)}
          />
        </div>
        <GenerateQRButton
          text={inputText}
          onGenerate={() => setQrText(inputText)}
        />
      </div>
    </div>
  );
}
