import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from './data.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/35"
    >
      <FaWhatsapp />
    </a>
  );
}
