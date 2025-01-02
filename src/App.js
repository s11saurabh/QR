import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react";
import React, { useState } from "react";
import Footer from './components/Footer';
import { AiFillCopy, AiOutlineDownload } from "react-icons/ai";

function App() {
  const [qr, setqr] = useState("");
  const [url, seturl] = useState("");
  const QrCodeDownload = async () => {
    const canvas = await (
      await html2canvas(document.getElementById("canvas"))
    ).toDataURL();

    if (canvas) {
      const a = document.createElement("a");
      a.download = "QrCode.png";
      a.href = canvas;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const QrCodeCopy = async () => {
	const canvas = await (
		await html2canvas(document.getElementById("canvas"))
	  ).toDataURL();
	  if (canvas) {
		  setqr(canvas);
		  navigator.clipboard.writeText(qr);
		}
  };
  return (
	<>
	<main>
	<div>
      <h1 style={{ width: "100%" }}>Generate your Qr Code</h1>
      <div class="mb-4">
        <label>Enter your Data</label>
        <input
          placeholder="Add Your Data for Qr Code generation"
          required
          style={{ marginTop: 10 }}
          type="text"
          onChange={(e) => seturl(e.target.value)}
        />
		 <button onClick={() => QrCodeDownload()} class="DownloadButton">
          <AiOutlineDownload />
          Download
        </button>
        <button onClick={() => QrCodeCopy()} class="CoppyButton">
          <AiFillCopy />
          Copy
        </button>
      </div>
	  </div>
      <article className="card">
        <div id="canvas" className="qr-box">
          <QRCodeCanvas
            value={url ? url : "https://github.com/thamerh"}
            size={300}
            bgColor={"#ffffff"}
            fgColor={"#0a75ad"}
            level={"H"}
            includeMargin={false}
            imageSettings={{
              src: "/pic.jpeg",
              x: undefined,
              y: undefined,
              height: 60,
              width: 60,
              excavate: true,
            }}
          />
        </div>
        <p>
          Enter your Data and create your custom Qr Code in a few seconds with a
          few clicks.
        </p>
      </article>
    
  
	</main>
	<Footer/>
</>
  );
}

export default App;
