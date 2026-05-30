import { useState } from "react";
import CertificateCanvas from "../components/CertificateCanvas";

export default function CertificateGenerator() {
  const [template, setTemplate] = useState(null);
  const [certId] = useState("DIL-" + Math.random().toString(36).substring(2, 10).toUpperCase());

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Certificate QR Generator</h1>

      {/* Image Upload */}
      <div className="bg-gray-100 p-6 rounded-xl space-y-4">
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setTemplate(URL.createObjectURL(e.target.files[0]))}
          className="border p-2 rounded w-full"
        />

        <input
          className="border p-2 rounded bg-gray-200 w-full"
          value={certId}
          readOnly
        />
      </div>

      {template && (
        <CertificateCanvas
          template={template}
          certId={certId}
        />
      )}
    </div>
  );
}
