import Logo from './Logo.jsx';
import { socials } from './data.js';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 py-10 text-coffee-50">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Logo light />
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-coffee-50/20 text-coffee-100 transition hover:-translate-y-1 hover:border-saffron hover:bg-saffron hover:text-coffee-900"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-coffee-100">Copyright 2026 Cafe Kolkata Demo. All rights reserved.</p>
      </div>
    </footer>
  );
}
