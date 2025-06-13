import { QRCodeSVG } from "qrcode.react"

export default function Main() {
    return (
        <div className="flex">
            <div className="mx-auto my-auto mt-96">
                <QRCodeSVG value="https://github.com/ldfxxx404"></QRCodeSVG>
            </div>
        </div>
    )
}