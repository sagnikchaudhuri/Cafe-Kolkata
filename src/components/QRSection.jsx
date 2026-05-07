import { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaDownload, FaQrcode } from 'react-icons/fa';
import { qrTarget } from './data.js';

export default function QRSection() {
  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'cafe-kolkata-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section className="bg-coffee-50 py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Scan To Visit</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
            QR ordering support ready for tabletops, flyers, and counters.
          </h2>
          <p className="mt-5 text-lg leading-8 text-coffee-700">
            Guests can scan the code and land on the live Cafe Kolkata demo page instantly. It is simple, owner-friendly,
            and ready for a real Vercel deployment.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md rounded-[8px] border border-coffee-200 bg-white p-6 shadow-glow">
          <div className="rounded-[8px] bg-coffee-900 p-5 text-center text-coffee-50">
            <div className="mb-5 flex items-center justify-center gap-3">
              <FaQrcode className="text-saffron" />
              <p className="font-bold">Cafe Kolkata Demo QR</p>
            </div>
            <div ref={qrRef} className="mx-auto grid w-fit place-items-center rounded-[8px] bg-white p-4">
              <QRCodeCanvas value={qrTarget} size={220} level="H" includeMargin />
            </div>
            <p className="mx-auto mt-5 max-w-xs break-words text-sm text-coffee-100">{qrTarget}</p>
          </div>
          <button type="button" onClick={downloadQR} className="btn-primary mt-5 w-full">
            <FaDownload /> Download QR
          </button>
        </div>
      </div>
    </section>
  );
}
