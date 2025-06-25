"use client";

import { QRCodeCanvas } from "qrcode.react";
import { FormEvent, useRef, useState } from "react";
import { Input } from "../shared/ui/Input";
import { Button } from "../shared/ui/Button";

export function QrForm() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setQrValue(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <section>
        <QRCodeCanvas size={350} value={qrValue.trim()} />
      </section>
      <section className="flex flex-col gap-2">
        <Input
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          placeholder="Enter URL or text"
          maxLength={1024}
        />
        <Button disabled={!Boolean(input.trim().length)} type="submit">
          Generate QR
        </Button>
      </section>
    </form>
  );
}
