import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from './data.js';

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    title: 'Demo Location',
    text: 'Demo Location: Park Street Area, Kolkata',
  },
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    text: '+91 90000 00000',
  },
  {
    icon: FaClock,
    title: 'Opening Hours',
    text: 'Monday to Sunday, 8:00 AM - 11:00 PM',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-coffee-900 sm:text-5xl">
            Stop by for coffee or order ahead.
          </h2>
          <p className="mt-5 text-base leading-7 text-coffee-600">
            Replace with your café’s real address, phone number, and map before launch.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[8px] border border-coffee-100 bg-coffee-50 p-6 shadow-soft">
                  <Icon className="text-2xl text-saffron" />
                  <h3 className="mt-4 font-bold text-coffee-900">{item.title}</h3>
                  <p className="mt-2 text-coffee-600">{item.text}</p>
                </article>
              );
            })}
            <a className="btn-primary w-full" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp /> Order on WhatsApp
            </a>
          </div>
          <div className="min-h-[420px] overflow-hidden rounded-[8px] border border-coffee-200 bg-coffee-100 shadow-soft">
            <iframe
              title="Cafe Kolkata map placeholder"
              src="https://www.google.com/maps?q=Park%20Street%20Kolkata&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
