import { QRCodeSVG } from "qrcode.react";

export default function Main() {
  return (
    <div className="flex justify-center">
      <div className="mt-64 flex flex-col items-center gap-10">
        <QRCodeSVG value="https://github.com/ldfxxx404" size={200}></QRCodeSVG>
        <input  
        type="text" 
        placeholder="Input your text"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>
    </div>
  );
}
