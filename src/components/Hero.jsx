import { motion } from 'framer-motion';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { images } from '../assets/images.js';
import { whatsappUrl } from './data.js';
import Logo from './Logo.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-coffee-900 text-coffee-50">
      <img
        src={images.hero}
        alt="Warm cafe interior with coffee counter"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-900 via-coffee-900/82 to-coffee-900/30" />
      <div className="absolute inset-x-0 top-0 z-20">
        <nav className="section-shell flex items-center justify-between py-5">
          <Logo light />
          <div className="hidden items-center gap-7 text-sm font-semibold text-coffee-50/85 md:flex">
            <a className="transition hover:text-saffron" href="#about">About</a>
            <a className="transition hover:text-saffron" href="#menu">Menu</a>
            <a className="transition hover:text-saffron" href="#gallery">Gallery</a>
            <a className="transition hover:text-saffron" href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <div className="section-shell relative z-10 flex min-h-screen items-center pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-5">Premium coffee, tea, and bakes in the heart of Kolkata</p>
          <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Fresh Brews, Delicious Bites, Cozy Vibes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-coffee-100 sm:text-xl">
            A warm neighborhood cafe serving slow-roasted coffee, comforting snacks, and handcrafted desserts made for
            relaxed conversations and quick takeaway orders.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp /> Order on WhatsApp
            </a>
            <a className="btn-secondary" href="#menu">
              Explore Menu <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
