import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import jsPDF from "jspdf";

export default function CertificateCanvas({ template, certId }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    draw();
  }, [template]);

  const loadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.src = src;
    });

  const draw = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const bg = await loadImage(template);

    canvas.width = bg.width;
    canvas.height = bg.height;

    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    // Generate QR Code for verification URL
    const verifyURL = `https://devinnovations.co.in/verify/${certId}`;
    const qr = await QRCode.toDataURL(verifyURL);
    const qrImg = await loadImage(qr);

    // Place QR bottom-right
    ctx.drawImage(qrImg, canvas.width - 230, canvas.height - 230, 200, 200);
  };

  // Download PNG
  const downloadPNG = () => {
    const link = document.createElement("a");
    link.download = `${certId}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  // Download PDF
  const downloadPDF = () => {
    const canvas = canvasRef.current;
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(img, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${certId}.pdf`);
  };

  // Upload to Google Cloud Storage
  const uploadToGCS = async () => {
    const canvas = canvasRef.current;

    const blob = await fetch(canvas.toDataURL("image/png")).then((r) =>
      r.blob()
    );

    const formData = new FormData();
    formData.append("file", blob, `${certId}.png`);
    formData.append("certId", certId);

    const res = await fetch("https://your-backend.com/upload-to-gcs", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert("Uploaded Successfully!\nURL: " + data.url);
  };

  return (
    <div className="space-y-4">
      <canvas ref={canvasRef} className="shadow-xl rounded-lg" />

      <div className="flex gap-4">
        <button
          onClick={downloadPNG}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Download PNG
        </button>

        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Download PDF
        </button>

        <button
          onClick={uploadToGCS}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Upload to Google Cloud
        </button>
      </div>
    </div>
  );
}
