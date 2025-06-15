import "./App.css";
import "./components/ui/Button";
import { QRCodeCanvas } from "qrcode.react";
import Button from "./components/ui/Button";
import Input from "./components/InputField";

function App() {
  return (
    <>
      <div className="flex justify-center mt-40">
        <QRCodeCanvas
          className="p-3 bg-white rounded-2xl border-4"
          value="hello"
          size={255}
        />
      </div>
      <div className="mt-10">
        <Input placeholder="Input text to QR" maxLength={512} />
      </div>
      <div className="mt-7">
        <Button />
      </div>
    </>
  );
}

export default App;
